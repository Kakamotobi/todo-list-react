import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm.js";
import Todo from "./Todo.js";
import "./TodoList.css";

function TodoList(props) {
	const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
	const [todos, setTodos] = useState(initialTodos);

	const addTodo = (todo) => {
		const newTodo = { todo: todo, id: uuid() };
		setTodos([...todos, newTodo]);
	};

	const updateTodo = (id, editedTodo) => {
		const newTodos = todos.map((t) =>
			t.id === id ? { ...t, todo: editedTodo } : t
		);
		setTodos(newTodos);
	};

	const removeTodo = (id) => {
		const newTodos = todos.filter((t) => t.id !== id);
		setTodos(newTodos);
	};

	const removeAll = () => {
		setTodos([]);
	};

	useEffect(() => {
		window.localStorage.setItem("todos", JSON.stringify(todos));
	});

	const todoItems = todos.map((t) => (
		<Todo
			key={t.id}
			id={t.id}
			todo={t.todo}
			updateTodo={updateTodo}
			removeTodo={removeTodo}
		/>
	));

	return (
		<div className="TodoList">
			<h1 className="TodoList__title">To Do List</h1>

			<ul className="TodoList__todos-container">{todoItems}</ul>

			<NewTodoForm addTodo={addTodo} />

			<footer>
				<em className="TodoList__desc">
					You have <span className="TodoList__remaining">{todos.length}</span>{" "}
					tasks remaning.
				</em>
				<button
					className="TodoList__clear-all-btn"
					type="button"
					onClick={removeAll}
				>
					Clear All
				</button>
			</footer>
		</div>
	);
}

export default TodoList;
