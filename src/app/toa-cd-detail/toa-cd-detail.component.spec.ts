import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToaCdDetailComponent } from './toa-cd-detail.component';

describe('ToaCdDetailComponent', () => {
  let component: ToaCdDetailComponent;
  let fixture: ComponentFixture<ToaCdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToaCdDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaCdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
