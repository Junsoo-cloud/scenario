import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, AsyncPipe } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { MarketService } from '../../services/market.service';

@Component({
  selector: 'app-market-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe, AsyncPipe],
  templateUrl: './market-detail.page.html',
  styleUrl: './market-detail.page.css'
})
export class MarketDetailPageComponent {
  private route = inject(ActivatedRoute);
  private marketService = inject(MarketService);

  script$ = this.route.paramMap.pipe(
    map((params) => params.get('id') ?? 'sc-101'),
    switchMap((id) => this.marketService.getScriptById(id))
  );
  related$ = this.marketService
    .getScripts()
    .pipe(map((items) => items.slice(0, 2)));
}
