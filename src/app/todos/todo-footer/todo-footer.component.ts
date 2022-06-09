import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos, setFilter } from '../../filtro/filtro.actions';
import { deleteCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  pendientes: number = 0;

  filtroActual: filtrosValidos;
  filtros: filtrosValidos[] = ['todos', 'pendientes', 'completados']

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe(filtro=>{
      this.filtroActual = filtro;
    })

    this.store.subscribe(state=>{
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length
    })
  }

  cambiarFiltro(filtro: filtrosValidos){
    this.store.dispatch(setFilter({filtro}));
  }

  deleteCompleted(){
    this.store.dispatch(deleteCompleted())
  }
}
