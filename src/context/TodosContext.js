import React, { createContext, useReducer, useEffect } from "react";
import todosReducer from "../reducers/todosReducer.js";

const TodosContext = createContext();
const DispatchContext = createContext();

const TodosProvider = (props) => {
	const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || [];
	const [todos, dispatch] = useReducer(todosReducer, initialTodos);

	useEffect(() => {
		window.localStorage.setItem("todos", JSON.stringify(todos));
	});

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	);
};

export { TodosContext, DispatchContext, TodosProvider };
