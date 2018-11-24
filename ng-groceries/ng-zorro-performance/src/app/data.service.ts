import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Selects } from './selects.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSelects(): Observable<Selects> {
    return this.http.get<Selects>('/api/selects');
  }
}
