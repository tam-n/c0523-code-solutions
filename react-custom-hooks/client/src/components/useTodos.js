/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';

/**
 * Manages the Todos by reading from and writing to the backend API.
 *
 * @returns {Object} with the following properties:
 *   isLoading: a boolean indicating if the data has not yet loaded;
 *   error: any error that occurred
 *   todos: a list of To Do items;
 *   addTodo: a function (newTodo) that will add a new To Do;
 *   toggleCompleted: a function (todoId) that will toggle the completion of an existing To Do.
 */
export function useTodos() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await readTodos();
        setTodos(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  async function readTodos() {
    const res = await fetch('/api/todos');
    if (!res.ok) {
      throw new Error(`fetch Error ${res.status}`);
    }
    return await res.json();
  }

  async function createTodo(newTodo) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    };
    const res = await fetch('/api/todos', req);
    if (!res.ok) {
      throw new Error(`fetch Error ${res.status}`);
    }
    const createdTodo = await res.json();
    setTodos((prevTodos) => [...prevTodos, createdTodo]);
  }

  async function updateTodo(todoId) {
    const todoToUpdate = todos.find((todo) => todo.todoId === todoId);
    if (!todoToUpdate) {
      throw new Error(`Todo with ID ${todoId} not found`);
    }
    const updatedTodo = {
      ...todoToUpdate,
      isCompleted: !todoToUpdate.isCompleted,
    };
    const req = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: updatedTodo.isCompleted }),
    };
    const res = await fetch(`/api/todos/${todoId}`, req);
    if (!res.ok) {
      throw new Error(`fetch Error ${res.status}`);
    }
    const updatedData = await res.json();
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.todoId === todoId ? updatedData : todo))
    );
  }

  return {
    isLoading,
    error,
    todos,
    addTodo: createTodo,
    toggleCompleted: updateTodo,
  };
}
