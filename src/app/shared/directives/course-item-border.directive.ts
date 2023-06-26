import { Directive, HostBinding, Input, OnInit } from '@angular/core';

import { getDaysBetweenDates } from '../helpers/getDaysBetweenDates';

@Directive({
  selector: '[appCourseItemBorder]',
})
export class CourseItemBorderDirective implements OnInit {
  @Input() creationDate = new Date();
  @HostBinding('style.border') border: string;
  @HostBinding('style.borderColor') borderColor: string;

  constructor() {
    this.border = '2px solid transparent';
    this.borderColor = 'transparent';
  }

  ngOnInit() {
    const currentDate = new Date();

    if (
      this.creationDate < currentDate &&
      getDaysBetweenDates(this.creationDate, currentDate) <= 14
    ) {
      this.borderColor = 'rgb(149, 192, 55)';
      return;
    }
    if (this.creationDate > currentDate) {
      this.borderColor = 'rgb(50, 174, 212)';
    }
  }
}
