import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerProjectsComponent } from './employer-projects.component';

describe('EmployerProjectsComponent', () => {
  let component: EmployerProjectsComponent;
  let fixture: ComponentFixture<EmployerProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
