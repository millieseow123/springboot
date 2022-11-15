import { Component, OnInit } from '@angular/core';

export class Quicknotes {
  title!: String;
  todo!: String;
}
@Component({
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
})


export class NotesComponent implements OnInit {
  titleModel: String;
  todoModel: String;
  quicknotes: Quicknotes[];

  constructor() {
    this.titleModel = '';
    this.todoModel = '';

    const defaultQuicknotes: Quicknotes = {
      title: 'Title',
      todo: 'To do here'
    };

    this.quicknotes = [defaultQuicknotes];
  }
  ngOnInit() {
  }

  createQuicknotes() {

    const newQuicknotes: Quicknotes = {
      title: this.titleModel,
      todo: this.todoModel
    };

    this.quicknotes.push(newQuicknotes);

    // set the model values to '' again
    this.titleModel = this.todoModel = '';
    //save to DB!!
  }

  clear() {
    this.titleModel = this.todoModel = '';
  }
}
