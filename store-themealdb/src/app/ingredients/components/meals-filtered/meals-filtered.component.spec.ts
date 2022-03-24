import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsFilteredComponent } from './meals-filtered.component';

describe('MealsFilteredComponent', () => {
  let component: MealsFilteredComponent;
  let fixture: ComponentFixture<MealsFilteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsFilteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
