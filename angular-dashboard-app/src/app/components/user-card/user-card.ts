import {
  CurrencyPipe,
  DatePipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeIdPipe } from '../../shared/pipes/employee-id-pipe';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    FormsModule,
    NgStyle,
    TitleCasePipe,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    EmployeeIdPipe,
  ],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  employeeName = 'padma gana';

  designation = 'Frontend Developer';

  experience = 7;

  salary = 1200000;

  joiningDate = new Date('2022-06-15');

  employeeId = 101;

  isActive = true;

  profileImage =
    'https://img.magnific.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740&q=80';

  skills = ['Angular', 'TypeScript', 'Java', 'SQL'];

  updateDesignation() {
    this.designation = 'Senior Frontend Developer';
  }
}
