import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class TodoComponent {

  name: string = '';
  content: string = '';

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.name.trim() === '' || this.content.trim() === '') {
      return;
    }

    const newTodo: Todo = {
      name: this.name,
      content: this.content
    };

    this.todoService.addTodo(newTodo);

    this.name = '';
    this.content = '';
  }

  deleteTodo(index: number): void {
    this.todoService.deleteTodo(index);
  }

  logTodos(): void {
    this.todoService.logTodos();
  }
}