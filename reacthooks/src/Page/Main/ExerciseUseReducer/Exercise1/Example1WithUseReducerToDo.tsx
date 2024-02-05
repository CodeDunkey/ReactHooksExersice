import { ACTION } from "./Example1WithUseReducer"
export const Todo = ({ todo, dispatch }: any) => {
    return (
        <div>
            <span style={{color: todo.complete ? '#AAA' : '#000'}}>
                {todo.input}
            </span>
            <button onClick={()=>dispatch({type: ACTION.DONE_UNDONE_TODO, payload: { id: todo.id}})}>Done</button>
            <button onClick={()=>dispatch({type: ACTION.DELETE_TODO, payload: { id: todo.id}})}>Delete</button>
        </div>
    )
}