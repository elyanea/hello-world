import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationProComponent } from './formation-pro.component';

describe('FormationProComponent', () => {
  let component: FormationProComponent;
  let fixture: ComponentFixture<FormationProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
