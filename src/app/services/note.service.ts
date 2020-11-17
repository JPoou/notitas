import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
import {Note} from '../models/note.model';

// declare var EventSourcePolyfill: any;
const EventSource = NativeEventSource || EventSourcePolyfill;

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
    return this.http.get('http://localhost:3000/notes/' + noteId);
  }

  update(note: Note): Observable<any> {
    return this.http.put('http://localhost:8585/notes', note);
  }

  eventNote() {
    return Observable.create((observer) => {
      const uri: any = 'http://localhost:8585/notes/notification/sse';
      const eventSource = new EventSource(uri);

      eventSource.onmessage = (event) => {
        console.log('Received event: ', event);
      };

      eventSource.addEventListener('note-result', function(event: any) {
        observer.next(event.data);
      });

      eventSource.addEventListener('heartbeat-result', function(event) {
        console.log('eventSource.addEventListener: on heartbeat....');
      });

      return () => eventSource.close();
    });
  }
}
