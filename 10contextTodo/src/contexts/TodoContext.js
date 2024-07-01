import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo 1",
            completed: false,   
        }
    ],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
