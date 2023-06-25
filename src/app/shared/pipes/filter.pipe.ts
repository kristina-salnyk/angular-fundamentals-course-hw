import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../../core/models/Course.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Course[], key: keyof Course, filter: string): Course[] {
    return value.filter(item =>
      item[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  }
}
