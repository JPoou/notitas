import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  notes(): Observable<any> {
    return this.http.get('http://localhost:8585/notes');
  }

}
