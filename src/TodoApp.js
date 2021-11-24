import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";
import "./TodoApp.css";

function TodoApp() {
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

	return (
		<div className="TodoApp">
			<h1 className="TodoApp__title">To Do List</h1>
			<TodoList todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} />
			<NewTodoForm addTodo={addTodo} />
			<Footer todos={todos} removeAll={removeAll} />
		</div>
	);
}

export default TodoApp;
