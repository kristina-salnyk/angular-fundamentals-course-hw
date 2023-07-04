import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (value <= 0 || !Number.isInteger(value)) return '0h 00 min';

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    const minutesStr = `${minutes.toString().padStart(2, '0')} min`;

    return (hours > 0 ? `${hours}h ` : '') + minutesStr;
  }
}
