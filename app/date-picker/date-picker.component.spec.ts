import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerComponent } from './date-picker.component';
import {By} from "protractor";

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check inistialized date and initdate', () => {
    let rightNowDate = new Date();
    component.date = rightNowDate;
    expect(component.date).toEqual(rightNowDate);
  });

  it('should cancel calendar changes', () => {
    let date = new Date();
    let editedDate = new Date('Apr 30, 2020');
    fixture.detectChanges();
    component.date = date;
    component.initDate = editedDate;
    fixture.detectChanges();
    component.cancelEdit();
    expect(component.date).toEqual(editedDate);
  });
});
