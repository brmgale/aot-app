import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CdOrInvest } from '../enums';

@Component({
  selector: 'app-toa-cd-and-invest',
  templateUrl: './toa-cd-and-invest.component.html',
  styleUrls: ['./toa-cd-and-invest.component.css']
})
export class ToaCdAndInvestComponent implements OnInit {
  private formGroup: FormGroup;
  private cdOrInvest = CdOrInvest;
  @Input() parentFormGroup: FormGroup;
  @Output() cdOrInvestChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'cdOrInvest': new FormControl('', Validators.required),
    });

    this.parentFormGroup.addControl('cdOrInvest', this.formGroup);

    this.formGroup.get('cdOrInvest').valueChanges.subscribe((value) => {
      this.cdOrInvestChange.emit(value);
    });
  }
}
