import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToaCdAndInvestComponent } from './toa-cd-and-invest.component';

describe('ToaCdAndInvestComponent', () => {
  let component: ToaCdAndInvestComponent;
  let fixture: ComponentFixture<ToaCdAndInvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToaCdAndInvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaCdAndInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
