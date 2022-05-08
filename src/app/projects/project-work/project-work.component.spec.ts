import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWorkComponent } from './project-work.component';

describe('ProjectWorkComponent', () => {
  let component: ProjectWorkComponent;
  let fixture: ComponentFixture<ProjectWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
