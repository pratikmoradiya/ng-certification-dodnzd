import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dayName' })
export class DayNamePipe implements PipeTransform {
  monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  transform(dt: number) {
    const date = new Date(dt * 1000);
    const dayOfWeek = date.getDay();
    // Get the day of the month
    const dayOfMonth = date.getDate();
    // Get the month index (0 - January, 1 - February, etc.)
    const monthIndex = date.getMonth();

    const formattedDate = `${this.days[dayOfWeek]}, ${this.monthNames[monthIndex]} ${dayOfMonth}`;

    return formattedDate;
  }
}
