import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { marketplaceScripts, ScriptItem } from '../data/mock-data';

@Injectable({ providedIn: 'root' })
export class MarketService {
  getScripts(): Observable<ScriptItem[]> {
    return of(marketplaceScripts).pipe(delay(200));
  }

  getScriptById(id: string): Observable<ScriptItem | undefined> {
    return of(marketplaceScripts.find((item) => item.id === id)).pipe(delay(200));
  }
}
