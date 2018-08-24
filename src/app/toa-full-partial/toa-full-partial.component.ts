import { Component, OnInit, Input } from '@angular/core';
import { FullPartial, CdOrInvest } from '../enums';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-toa-full-partial',
  templateUrl: './toa-full-partial.component.html',
  styleUrls: ['./toa-full-partial.component.css']
})
export class ToaFullPartialComponent implements OnInit {
  private fullPartial = FullPartial;
  private formGroup: FormGroup;

  @Input() parentFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'fullOrPartial' : new FormControl('', [])
    });

    this.parentFormGroup.addControl(CdOrInvest.invest, this.formGroup);
  }
}
