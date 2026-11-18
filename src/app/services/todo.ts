import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];

  logTodos(): void {
    console.log('Liste des Todos :', this.todos);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.logTodos();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
    this.logTodos();
  }
}

export type { Todo };
