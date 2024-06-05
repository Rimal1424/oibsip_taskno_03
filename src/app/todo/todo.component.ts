import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodo: string = '';
  todos: string[] = [];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }

  removeTodo(todo: string) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
