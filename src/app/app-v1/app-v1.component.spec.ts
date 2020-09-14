import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppV1Component } from './app-v1.component';

describe('AppV1Component', () => {
  let component: AppV1Component;
  let fixture: ComponentFixture<AppV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
