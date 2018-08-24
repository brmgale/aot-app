import { Component, OnInit, Input } from '@angular/core';
import { ImmediateOrAtMaturity, CdOrInvest } from '../enums';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-toa-cd-detail',
  templateUrl: './toa-cd-detail.component.html',
  styleUrls: ['./toa-cd-detail.component.css']
})
export class ToaCdDetailComponent implements OnInit {
  private immediateOrAtMaturity = ImmediateOrAtMaturity;
  private formGroup: FormGroup;

  @Input() parentFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'immediateOrAtMaturity' : new FormControl('', [])
    });

    this.parentFormGroup.addControl(CdOrInvest.cd, this.formGroup);
  }
}
