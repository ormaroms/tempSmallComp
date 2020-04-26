import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Input() date: Date;
  @Output() dateChange = new EventEmitter<Date>();
  public heb: any;
  public initDate: Date;

  constructor() {}

  ngOnInit(): void {
    this.initDate = this.date;
    this.heb = {
      firstDayOfWeek: '0',
      monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
      monthNamesShort: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יוני', 'יולי', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
      dayNamesMin: [ "א","ב","ג","ד","ה","ו","ש" ],
      dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
      dayNamesShort: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
      dateFormat: 'dd/mm/yy'
    };
  }

  saveDate() {
    this.emitChanges();
  }

  cancelEdit() {
    this.date = this.initDate;
    this.emitChanges();
  }

  pickNow() {
    this.initDate = this.date = new Date();
    this.emitChanges();
  }

  clearDate() {
    this.initDate = this.date = null;
    this.emitChanges();
  }

  private emitChanges() {
    this.dateChange.emit(this.date);
  }
}
