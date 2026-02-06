import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { CommunityService } from '../../services/community.service';

@Component({
  selector: 'app-community-detail-page',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './community-detail.page.html',
  styleUrl: './community-detail.page.css'
})
export class CommunityDetailPageComponent {
  private route = inject(ActivatedRoute);
  private communityService = inject(CommunityService);

  post$ = this.route.paramMap.pipe(
    map((params) => params.get('id') ?? 'p-201'),
    switchMap((id) => this.communityService.getPostById(id))
  );
}
