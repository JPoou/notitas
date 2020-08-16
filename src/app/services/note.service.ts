import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  notes(): Observable<any> {
    return this.http.get('http://localhost:8585/notes');
  }

  store(note: Note): Observable<any> {
    return this.http.post('http://localhost:8585/notes', note);
  }

  getById(noteId: number): Observable<any> {
    return this.http.get('http://localhost:8585/notes/' + noteId);
  }
}
