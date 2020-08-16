import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './partials/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateNoteComponent } from './note/create-note/create-note.component';
import { UpdateNoteComponent } from './note/update-note/update-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CreateNoteComponent,
    UpdateNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
