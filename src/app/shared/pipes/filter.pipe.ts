import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../../core/models/Course.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: Course[],
    key: keyof Course & string,
    filter: string
  ): Course[] {
    if (filter === '') return value;

    return value.filter(item =>
      item[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  }
}
