import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../../core/models/Course.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: Course[], key: keyof Course): Course[] {
    return [...value].sort((a, b) => {
      if (a[key] < b[key]) return 1;
      return -1;
    });
  }
}
