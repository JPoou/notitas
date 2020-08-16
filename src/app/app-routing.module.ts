import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateNoteComponent} from './note/create-note/create-note.component';
import {UpdateNoteComponent} from './note/update-note/update-note.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'note/create', component: CreateNoteComponent },
  { path: 'note/update/:id', component: UpdateNoteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
