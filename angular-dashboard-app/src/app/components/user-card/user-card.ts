import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  employeeName = 'Padma Gana';
  designation = 'Frontend Developer';
  experience = 7;
  isActive = true;
  profileImage = 'https://img.magnific.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740&q=80';

  updateDesignation() {
    this.designation = 'Senior Frontend Developer';
  }
}
