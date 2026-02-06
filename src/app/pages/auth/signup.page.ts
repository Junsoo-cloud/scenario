import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './signup.page.html',
  styleUrl: './signup.page.css'
})
export class SignupPageComponent {}
