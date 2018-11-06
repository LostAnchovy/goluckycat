import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskslistComponent } from './taskslist.component';

describe('TaskslistComponent', () => {
  let component: TaskslistComponent;
  let fixture: ComponentFixture<TaskslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
