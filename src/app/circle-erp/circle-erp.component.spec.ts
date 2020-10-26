import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleERPComponent } from './circle-erp.component';

describe('CarouselComponent', () => {
  let component: CircleERPComponent;
  let fixture: ComponentFixture<CircleERPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleERPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleERPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
