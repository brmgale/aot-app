import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CdOrInvest } from '../enums';

@Component({
  selector: 'app-toa-assets',
  templateUrl: './toa-assets.component.html',
  styleUrls: ['./toa-assets.component.css']
})
export class ToaAssetsComponent implements OnInit {
  private formGroup: FormGroup;
  private cdOrInvestEnum = CdOrInvest;
  private cdOrInvest = 'none';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'holder': new FormControl('', []),
    });
  }

  public cdOrInvestChangeHandler(value: string){
    this.cdOrInvest = value;
    if (value === CdOrInvest.cd){
      this.formGroup.removeControl(CdOrInvest.invest);
    } else if (value === CdOrInvest.invest) {
      this.formGroup.removeControl(CdOrInvest.cd);
    }
  }
}
