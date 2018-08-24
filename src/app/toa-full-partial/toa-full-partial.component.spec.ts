import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToaFullPartialComponent } from './toa-full-partial.component';

describe('ToaFullPartialComponent', () => {
  let component: ToaFullPartialComponent;
  let fixture: ComponentFixture<ToaFullPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToaFullPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaFullPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
