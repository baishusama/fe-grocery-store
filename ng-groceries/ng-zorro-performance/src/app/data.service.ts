import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Selects } from './selects.model';
import { GROUPS } from './static-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSelects(): Observable<Selects> {
    return this.http.get<Selects>('/api/selects');
  }

  getStaticSelects(): Observable<Selects> {
    return of(GROUPS);
  }
}
