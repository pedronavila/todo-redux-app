import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[Todo] Crea ToDo',
    props<{texto: string}>(),
);

export const toggle = createAction(
    '[Todo] Toggle ToDo',
    props<{id: number}>(),
);

export const editar = createAction(
    '[Todo] Editar ToDo',
    props<{id: number, texto: string}>(),
);

export const eliminar = createAction(
    '[Todo] Eliminar ToDo',
    props<{id: number}>(),
);

export const toggleAll = createAction(
    '[Todo] ToggleAll ToDo',
    props<{completado: boolean}>()
);

export const deleteCompleted = createAction(
    '[Todo] DeleteCompleted ToDo'
);