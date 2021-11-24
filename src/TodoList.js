import React from "react";
import Todo from "./Todo.js";
import "./TodoList.css";

function TodoList({ todos, updateTodo, removeTodo }) {
	return (
		<ul className="TodoList">
			{todos.map((t) => (
				<Todo
					key={t.id}
					id={t.id}
					todo={t.todo}
					updateTodo={updateTodo}
					removeTodo={removeTodo}
				/>
			))}
		</ul>
	);
}

export default TodoList;
