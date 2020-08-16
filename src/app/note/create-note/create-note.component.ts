import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NoteService} from '../../services/note.service';
import {Note} from '../../models/note.model';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  public note: Note = {
    title: '',
    body: '',
    userId: 0
  };
  constructor(private noteService: NoteService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.noteService.store(this.note).subscribe(response => this.route.navigate(['home']) );
  }
}
