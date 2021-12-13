import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent implements OnInit {
  filtro!:any;
  todos: Todo[]=[];
  constructor( private store:Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe(state =>{
      this.filtro=state.filtro;
      this.todos=state.todos;
    });

  }

}
