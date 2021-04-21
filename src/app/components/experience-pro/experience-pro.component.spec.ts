import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceProComponent } from './experience-pro.component';

describe('ExperienceProComponent', () => {
  let component: ExperienceProComponent;
  let fixture: ComponentFixture<ExperienceProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
