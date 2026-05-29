import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { UserCard } from "./components/user-card/user-card";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, UserCard, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-dashboard-app');
}
