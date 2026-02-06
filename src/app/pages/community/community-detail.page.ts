import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { CommunityService } from '../../services/community.service';

@Component({
  selector: 'app-community-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe],
  templateUrl: './community-detail.page.html',
  styleUrl: './community-detail.page.css'
})
export class CommunityDetailPageComponent {
  post$ = this.route.paramMap.pipe(
    map((params) => params.get('id') ?? 'p-201'),
    switchMap((id) => this.communityService.getPostById(id))
  );

  constructor(
    private route: ActivatedRoute,
    private communityService: CommunityService
  ) {}
}
