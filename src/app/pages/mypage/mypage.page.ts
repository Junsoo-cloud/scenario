import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-mypage',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './mypage.page.html',
  styleUrl: './mypage.page.css'
})
export class MyPageComponent {}
