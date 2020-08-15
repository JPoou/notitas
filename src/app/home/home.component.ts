import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NoteService} from '../services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public notes: any;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.notes().subscribe(response => {
      this.notes = response;
      console.log(response);
    });
  }
}
