import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbioComponent } from './editbio.component';

describe('EditbioComponent', () => {
  let component: EditbioComponent;
  let fixture: ComponentFixture<EditbioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
