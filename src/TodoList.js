import React, { useContext } from "react";
import { TodosContext } from "./context/TodosContext.js";
import Todo from "./Todo.js";
import "./TodoList.css";

function TodoList() {
	const todos = useContext(TodosContext);

	return (
		<ul className="TodoList">
			{todos.map((t) => (
				<Todo key={t.id} id={t.id} todo={t.todo} isComplete={t.isComplete}/>
			))}
		</ul>
	);
}

export default TodoList;
