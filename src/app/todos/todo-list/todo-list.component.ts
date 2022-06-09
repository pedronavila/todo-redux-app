import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) { 
    // this.store.select('todos').subscribe(todos=>{
    //   this.todos = todos;
    // })

    this.store.subscribe(state=>{
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    })
  }

  ngOnInit(): void {
  }

}
