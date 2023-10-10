"use client";
import { todo } from "node:test";
import { createContext, ReactNode, useContext, useState } from "react";
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
export type TodoContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void; // call-signature
  toggleTodoToComplete: (id: string) => void;
  handleToggleDelete: (id: string) => void;
};
export const todosContext = createContext<TodoContext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(
    () => {
        const newTodo=localStorage.getItem('todos') || '[]'
        return JSON.parse(newTodo) as Todo[]
    }
  );
  const handleAddTodo = (task: string) => {
    setTodos((prev: Todo[]) => {
      const newTodo: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      window.localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    });
  };

  const toggleTodoToComplete = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      window.localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleToggleDelete = (id: string) => {
    setTodos((prev) => {
      const newTodo = prev.filter((todo) => {
        return todo.id !== id;
      });
      window.localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    });
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddTodo, toggleTodoToComplete, handleToggleDelete }}
    >
      {children}
    </todosContext.Provider>
  );
};

// context api
export function useTodos() {
  const todoContextValue = useContext(todosContext);
  if (!todoContextValue) {
    throw new Error("useToods outside provider");
  }
  return todoContextValue;
}
