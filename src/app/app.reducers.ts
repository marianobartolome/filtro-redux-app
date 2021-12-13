import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todo/model/todo.model";


import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import * as fromFiltroActions from './filter/filter.actions';

export interface AppState{
    todos: Todo[];
    filtro:fromFiltroActions.filtrosValidos;
}

export const appReducers: ActionReducerMap<any,any>={
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer
};