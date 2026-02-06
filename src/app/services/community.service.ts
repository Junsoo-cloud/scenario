import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { communityPosts, CommunityPost } from '../data/mock-data';

@Injectable({ providedIn: 'root' })
export class CommunityService {
  getPosts(): Observable<CommunityPost[]> {
    return of(communityPosts).pipe(delay(200));
  }

  getPostById(id: string): Observable<CommunityPost | undefined> {
    return of(communityPosts.find((item) => item.id === id)).pipe(delay(200));
  }
}
