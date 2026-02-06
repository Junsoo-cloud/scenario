import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MarketService } from '../../services/market.service';

@Component({
  selector: 'app-market-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe, AsyncPipe],
  templateUrl: './market-list.page.html',
  styleUrl: './market-list.page.css'
})
export class MarketListPageComponent {
  private marketService = inject(MarketService);
  scripts$ = this.marketService.getScripts();
}
