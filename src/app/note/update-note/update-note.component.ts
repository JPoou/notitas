import { Component, OnInit } from '@angular/core';
import {Note} from '../../models/note.model';
import {NoteService} from '../../services/note.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  public noteId: number;
  public note: Note = {
    title: '',
    body: '',
    userId: 0
  };

  constructor(private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.noteId = Number(this.route.snapshot.paramMap.get("id"));
    this.noteService.getById(this.noteId).subscribe(response => {
      this.note = response;
    });
  }

  onSubmit(): void {
    this.noteService.update(this.note).subscribe(() => this.router.navigate(['home']));
  }
}
