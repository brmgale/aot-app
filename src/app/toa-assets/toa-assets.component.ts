import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CdOrInvest } from '../enums';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
	selector: 'app-toa-assets',
	templateUrl: './toa-assets.component.html',
	styleUrls: ['./toa-assets.component.css']
})
export class ToaAssetsComponent implements OnInit {
	private formGroup: FormGroup;
	private cdOrInvestEnum = CdOrInvest;
	private cdOrInvest = 'none';
	private cdInvestQuestions: Array<Questions>;

	constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

	ngOnInit() {
		this.httpClient.get<Array<Questions>>('assets/example.json').subscribe((questions) => {
			this.cdInvestQuestions = questions["cdOrInvest"];
		});

		this.formGroup = this.formBuilder.group({});
	}

	public selectedValueChangeHandler(value: string) {
		console.log(value);
	}

	public cdOrInvestChangeHandler(value: string) {
		this.cdOrInvest = value;
		if (value === CdOrInvest.cd) {
			this.formGroup.removeControl(CdOrInvest.invest);
		} else if (value === CdOrInvest.invest) {
			this.formGroup.removeControl(CdOrInvest.cd);
		}
	}
}

export class Questions {
	id: string;
	title: string;
}
