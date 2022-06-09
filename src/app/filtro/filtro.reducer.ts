import { createReducer, on } from "@ngrx/store";
import { filtrosValidos, setFilter } from './filtro.actions';



export const initialState: filtrosValidos = <filtrosValidos>'todos';



export const filterReducer = createReducer(
    initialState,
    on(setFilter, (state, {filtro}) => filtro),
);