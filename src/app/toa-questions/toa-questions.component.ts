import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Questions } from '../toa-assets/toa-assets.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-toa-questions',
  templateUrl: './toa-questions.component.html',
  styleUrls: ['./toa-questions.component.css']
})
export class ToaQuestionsComponent implements OnInit {
  private formGroup: FormGroup;
  @Input() questions: Array<Questions>
  @Output() selectedValueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'formControlQuestions': new FormControl('', Validators.required)
    });

    this.formGroup.get('formControlQuestions').valueChanges.subscribe((value) => {
      this.selectedValueChange.emit(value);
    });
  }
}
