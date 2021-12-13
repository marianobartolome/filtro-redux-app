
import { Todo } from './model/todo.model';
import * as fromTodo from './todo.actions';

const todo1= new Todo('Vencer a thanos');
const todo2= new Todo('Salvar al mundo');
const todo3= new Todo('Pedir prestado el traje de ironman');

todo2.completado=true;

const estadoInicial:Todo[]=[todo1,todo2,todo3];
export function todoReducer(state=estadoInicial,
                            action: fromTodo.Acciones): Todo[]{
    switch(action.type){
        case fromTodo.AGREGAR_TODO:
            const todo=new Todo( action.texto);
            return [...state,todo];  //clonando el estado actual para retornar un nuevo arreglo

        case fromTodo.TOOGLE_TODO:
            //const todo=new Todo( action.texto);
            return state.map( todoEdit=>{
                if(todoEdit.id===action.id){
                   return{
                       ...todoEdit, //operardor express ... clona todo las propiedades pero va a cambiar solo las que indique
                       completado: !todoEdit.completado
                   };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.TOOGLE_ALL_TODO:
            //const todo=new Todo( action.texto);
            return state.map( todoEdit=>{
                
                   return{
                       ...todoEdit, //operardor express ... clona todo las propiedades pero va a cambiar solo las que indique
                       completado: action.completado
                   };
                
            });
        
        case fromTodo.EDITAR_TODO:
            //const todo=new Todo( action.texto);
            return state.map( todoEdit=>{
                if(todoEdit.id===action.id){
                    return{
                        ...todoEdit, //operardor express ... clona todo las propiedades pero va a cambiar solo las que indique
                        texto: action.texto
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.BORRAR_TODO:

            //const todo=new Todo( action.texto);
            return state.filter(todoEdit=> todoEdit.id!==action.id);

        case fromTodo.BORRAR_ALL_TODO:
            //const todo=new Todo( action.texto);
            return state.filter(todoEdit=> !todoEdit.completado);
        
        default:
            return state;
    }

}