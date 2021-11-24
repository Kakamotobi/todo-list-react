import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const TodosContext = createContext();

const TodosProvider = (props) => {
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
		<TodosContext.Provider
			value={{ todos, addTodo, updateTodo, removeTodo, removeAll }}
		>
			{props.children}
		</TodosContext.Provider>
	);
};

export { TodosContext, TodosProvider };
