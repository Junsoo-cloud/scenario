import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { CommunityService } from '../../services/community.service';
import { MarketService } from '../../services/market.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe, AsyncPipe],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePageComponent {
  featuredScripts$ = this.marketService
    .getScripts()
    .pipe(map((items) => items.slice(0, 3)));
  communityPosts$ = this.communityService.getPosts();

  constructor(
    private marketService: MarketService,
    private communityService: CommunityService
  ) {}
}
