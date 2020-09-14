import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppV2Component } from './app-v2.component';

describe('AppV2Component', () => {
  let component: AppV2Component;
  let fixture: ComponentFixture<AppV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
