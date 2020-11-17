import { Component, OnInit } from '@angular/core';
import {NoteService} from '../services/note.service';
import {Note} from '../models/note.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public notes: Note[] = [];
  public myNotes: BehaviorSubject<any>;

  constructor(private noteService: NoteService) {
    this.myNotes = new BehaviorSubject(null);
  }

  public doNotificationSubscription(): void {
    try {
      this.noteService
        .eventNote()
        .subscribe((result) => {
          const currentValue = this.myNotes.value;
          const updatedValue = [...currentValue, JSON.parse(result)];
          this.myNotes.next(updatedValue);
        });
    } catch (e) {
      console.log(e);
    }
  }

  public doSubjectSubscription(): void {
    this.myNotes.subscribe((result) => {
      console.log(this.myNotes);
      // this.actualizarTexto(result);
    });

    /*this.mySubject.subscribe((result)=>{
      this.actualizarGrafica(result);
    });*/

  }

  ngOnInit(): void {

    this.doNotificationSubscription();

    this.noteService.notes().subscribe(response => {
      this.myNotes.next(response);
    });
  }


}
