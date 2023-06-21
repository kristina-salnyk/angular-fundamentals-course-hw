import { Directive, HostBinding, Input, OnInit } from '@angular/core';

import { getDaysBetweenDates } from '../helpers/getDaysBetweenDates';

@Directive({
  selector: '[appCourseItemBorder]',
})
export class CourseItemBorderDirective implements OnInit {
  @Input() creationDate = '';
  @HostBinding('style.border') border: string;
  @HostBinding('style.borderColor') borderColor: string;

  constructor() {
    this.border = '2px solid transparent';
    this.borderColor = 'transparent';
  }

  ngOnInit() {
    const creationDate = new Date(this.creationDate);
    const currentDate = new Date();

    if (
      creationDate < currentDate &&
      getDaysBetweenDates(creationDate, currentDate) <= 14
    ) {
      this.borderColor = '#95c037';
      return;
    }
    if (creationDate > currentDate) {
      this.borderColor = '#32aed4';
    }
  }
}
