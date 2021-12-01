import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer.js";
import todosReducer from "../reducers/todosReducer.js";

const TodosContext = createContext();
const DispatchContext = createContext();

const TodosProvider = (props) => {
	const [todos, dispatch] = useLocalStorageReducer("todos", [], todosReducer);

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	);
};

export { TodosContext, DispatchContext, TodosProvider };
