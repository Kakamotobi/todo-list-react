import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm.js";
import Todo from "./Todo.js";
import "./TodoList.css";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: JSON.parse(localStorage.getItem("todos") || "[]"),
		};

		this.addTodo = this.addTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.removeAll = this.removeAll.bind(this);
	}

	addTodo(todo) {
		const newTodo = { todo: todo, id: uuid() };
		this.setState(
			(prevState) => ({
				todos: [...prevState.todos, newTodo],
			}),
			() => localStorage.setItem("todos", JSON.stringify(this.state.todos))
		);
	}

	updateTodo(id, editedTodo) {
		this.setState(
			{
				todos: this.state.todos.map((t) =>
					t.id === id ? { ...t, todo: editedTodo } : t
				),
			},
			() => localStorage.setItem("todos", JSON.stringify(this.state.todos))
		);
	}

	removeTodo(id) {
		this.setState(
			{
				todos: this.state.todos.filter((t) => t.id !== id),
			},
			() => localStorage.setItem("todos", JSON.stringify(this.state.todos))
		);
	}

	removeAll() {
		this.setState(
			{
				todos: [],
			},
			() => localStorage.setItem("todos", [])
		);
	}

	render() {
		const todos = this.state.todos.map((t) => (
			<Todo
				key={t.id}
				id={t.id}
				todo={t.todo}
				updateTodo={this.updateTodo}
				removeTodo={this.removeTodo}
			/>
		));

		return (
			<div className="TodoList">
				<h1 className="TodoList__title">To Do List</h1>

				<ul className="TodoList__todos-container">{todos}</ul>

				<NewTodoForm addTodo={this.addTodo} />

				<footer>
					<em className="TodoList__desc">
						You have{" "}
						<span className="TodoList__remaining">
							{this.state.todos.length}
						</span>{" "}
						tasks remaning.
					</em>
					<button
						className="TodoList__clear-all-btn"
						type="button"
						onClick={this.removeAll}
					>
						Clear All
					</button>
				</footer>
			</div>
		);
	}
}

export default TodoList;
