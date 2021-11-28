import React, { useState, useContext, memo } from "react";
import { DispatchContext } from "./context/TodosContext.js";
import EditTodoForm from "./EditTodoForm.js";
import "./Todo.css";

function Todo({ id, todo, isComplete }) {
	const dispatch = useContext(DispatchContext);

	const [isEditing, toggleIsEditing] = useState(false);

	const handleCheckOff = () => {
		dispatch({ type: "CHECK_OFF", id });
	};

	const toggleEdit = () => {
		toggleIsEditing(!isEditing);
	};

	const handleRemoveTodo = () => {
		dispatch({ type: "REMOVE_TODO", id });
	};

	return (
		<li className="Todo" onClick={handleCheckOff}>
			{isEditing ? (
				<EditTodoForm id={id} todo={todo} toggleIsEditing={toggleIsEditing} />
			) : (
				<p className={`Todo__task ${isComplete && "checked-off"}`}>{todo}</p>
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

export default memo(Todo);
