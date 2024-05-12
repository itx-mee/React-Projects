import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo: "todoMsg",
            isCompleted : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    toggleTodo : (id) => {},
    deleteTodo : (id) => {}
})

export const TodoProvider = TodoContext.Provider

export function useTheme (){
    return useContext(TodoContext)
}