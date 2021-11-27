import React, { createContext, useReducer, useEffect } from "react";
import todosReducer from "../reducers/todosReducer.js";

const TodosContext = createContext();

const TodosProvider = (props) => {
	const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
	const [todos, dispatch] = useReducer(todosReducer, initialTodos);

	useEffect(() => {
		window.localStorage.setItem("todos", JSON.stringify(todos));
	});

	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			{props.children}
		</TodosContext.Provider>
	);
};

export { TodosContext, TodosProvider };
