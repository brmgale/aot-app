import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToaAssetsComponent } from './toa-assets.component';

describe('ToaAssetsComponent', () => {
  let component: ToaAssetsComponent;
  let fixture: ComponentFixture<ToaAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToaAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
