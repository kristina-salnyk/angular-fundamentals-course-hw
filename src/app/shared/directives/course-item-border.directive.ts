import { Directive, HostBinding, Input, OnInit } from '@angular/core';

import { getDaysBetweenDates } from '../helpers/getDaysBetweenDates';

@Directive({
  selector: '[appCourseItemBorder]',
})
export class CourseItemBorderDirective implements OnInit {
  @Input() creationDate = new Date();
  @HostBinding('style.borderWidth') borderWidth: string;
  @HostBinding('style.borderStyle') borderStyle!: string;
  @HostBinding('style.borderColor') borderColor!: string;

  constructor() {
    this.borderWidth = '2px';
  }

  ngOnInit() {
    const currentDate = new Date();

    if (
      this.creationDate < currentDate &&
      getDaysBetweenDates(this.creationDate, currentDate) <= 14
    ) {
      this.borderStyle = 'solid';
      this.borderColor = 'rgb(149, 192, 55)';
      return;
    }

    if (this.creationDate > currentDate) {
      this.borderStyle = 'solid';
      this.borderColor = 'rgb(50, 174, 212)';
      return;
    }

    this.borderStyle = 'hidden';
    this.borderColor = 'transparent';
  }
}
