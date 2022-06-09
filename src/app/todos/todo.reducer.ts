import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, deleteCompleted, editar, eliminar, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Salvar al Mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Iron Man'),
    new Todo('Robar el teseracto'),
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),

  on(toggle, (state, {id}) => {
    return state.map(todo=>{
      if(todo.id == id){
        
        return {
          ...todo,
          completado: !todo.completado
        }
      }else{
        return todo;
      }
      
    });
  }),
  on(editar, (state, {id, texto}) => {
    return state.map(todo=>{
      if(todo.id == id){
        
        return {
          ...todo,
          texto: texto,
        }
      }else{
        return todo;
      }
      
    });
  }),
  on(eliminar, (state, {id}) => {
    return state.filter(todo=>{
      return todo.id !== id 
    });
  }),
  on(toggleAll, (state, {completado}) => {
    return state.map(todo=>{       
        return {
          ...todo,
          completado: completado
        }
    });
  }),

  on(deleteCompleted, (state) =>{
    return state.filter(todo=> !todo.completado)
  })
);