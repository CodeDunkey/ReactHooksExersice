import { useState, useReducer } from "react";
import { Todo } from "./Example1WithUseReducerToDo";
interface ACTION_OF_REDUCER {
    ADD_TODO: string,
    DONE_UNDONE_TODO: string,
    DELETE_TODO: string,
}
export const ACTION: ACTION_OF_REDUCER = {
    ADD_TODO: "add_todo",
    DONE_UNDONE_TODO: "done_unDone",
    DELETE_TODO: "delete",
}

// the reducer function below handles the 
const reducer = (todos: any, action: any) => {
    switch (action.type) {
        case ACTION.ADD_TODO:
            return [...todos, newTodo(action.payload.input)]
        case ACTION.DONE_UNDONE_TODO:
            return todos.map((todo: { id: any; complete: any; }) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTION.DELETE_TODO:
            return todos.filter((todo: { id: any }) => todo.id !== action.payload.id)
        default:
            throw new Error
    }
}
const newTodo = (input: any) => {
    return { id: Date.now(), input: input, complete: false }
}
export const Example1WithUseReducer = () => {

    const [todos, dispatch] = useReducer(reducer, [])
    const [input, setInput] = useState<string>()

    const handleSubmit = () => {
        if (input !== "" && input !== undefined) {
            dispatch({ type: ACTION.ADD_TODO, payload: { input: input } })
            setInput("")
        }
    }

    console.log('render');
    console.log('todos', todos);
    return (
        <div className="example1CaseWrapper">
            <p>Example 1 With UseReducer</p>
            <div className="todoWrapper">
                <button className="submitButton" onClick={handleSubmit}>submit todo</button>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="type in a todo"></input>
                {todos.map((todo: { id: any; }) => {
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch}>{todo}</Todo>
                })}
            </div>
        </div>
    )
}