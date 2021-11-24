import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm.js";
import "./Todo.css";

function Todo({ id, todo, updateTodo, removeTodo }) {
	const [isEditing, toggleIsEditing] = useState(false);

	const toggleEdit = () => {
		toggleIsEditing(!isEditing);
	};

	const handleRemoveTodo = () => {
		removeTodo(id);
	};

	return (
		<li className="Todo">
			{isEditing ? (
				<EditTodoForm
					id={id}
					todo={todo}
					toggleIsEditing={toggleIsEditing}
					updateTodo={updateTodo}
				/>
			) : (
				<p className="Todo__task">{todo}</p>
			)}
			<button
				className="Todo__toggle-edit-btn"
				type="button"
				onClick={toggleEdit}
			>
				<i className="fas fa-edit" />
			</button>
			<button
				className="Todo__remove-btn"
				type="button"
				onClick={handleRemoveTodo}
			>
				<i className="far fa-check-circle" />
			</button>
		</li>
	);
}

export default Todo;
