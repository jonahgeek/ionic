import { ViewNotePage } from './../view-note/view-note';
import { Note } from './../../models/note.model';
import { NoteServiceProvider } from './../../providers/note-service/note-service';
import { AddNotePage } from './../add-note/add-note';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: Promise<Note[]>;
  private note: Note;

  constructor(public navCtrl: NavController,
    private noteServiceProvider: NoteServiceProvider) {

  }

  ionViewWillEnter(){
   this.notes = this.getAllNotes();
  }
  addNote(){
    this.navCtrl.push(AddNotePage);
  }
  getNote(createDate: number){
    this.noteServiceProvider.getNote(createDate).then((n) =>{
      this.note = n;
      this.navCtrl.push(ViewNotePage, { note: this.note })
    })
  }

  getAllNotes(){
    return this.noteServiceProvider.getAllNotes();
  }

}
