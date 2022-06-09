import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { editar, eliminar, toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item: Todo;
  @ViewChild('inputEditar') txtInputEditar: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.item.completado);
    this.txtInput = new FormControl(this.item.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor=>{
      this.store.dispatch(toggle({id: this.item.id}));
    })
  }
  editar(){
    this.editando = true;
    setTimeout(()=>{
      this.txtInputEditar.nativeElement.select();
    })
    
  }

  terminarEdicion(){
    this.editando = false;
    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.item.texto) return;
    this.store.dispatch(editar(
      {
        id: this.item.id, 
        texto: this.txtInput.value
      }
    ))
  }

  eliminar(){
    this.store.dispatch(eliminar({id: this.item.id}));
  }
}
