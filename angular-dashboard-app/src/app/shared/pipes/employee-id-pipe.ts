import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeId',
  standalone: true
})
export class EmployeeIdPipe implements PipeTransform {
  transform(value: number): string {
    return `EMP-${value}`;
  }
}
