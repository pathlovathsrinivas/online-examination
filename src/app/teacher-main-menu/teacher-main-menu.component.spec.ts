import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMainMenuComponent } from './teacher-main-menu.component';

describe('TeacherMainMenuComponent', () => {
  let component: TeacherMainMenuComponent;
  let fixture: ComponentFixture<TeacherMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
