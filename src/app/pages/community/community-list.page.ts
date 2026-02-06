import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommunityService } from '../../services/community.service';

@Component({
  selector: 'app-community-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe],
  templateUrl: './community-list.page.html',
  styleUrl: './community-list.page.css'
})
export class CommunityListPageComponent {
  private communityService = inject(CommunityService);
  posts$ = this.communityService.getPosts();
}
