import React, { useState } from "react";

function EditTodoForm({ id, todo, toggleIsEditing, updateTodo }) {
	const [editedTodo, setEditedTodo] = useState(todo);

	const handleChange = (evt) => {
		setEditedTodo(evt.target.value);
	};

	const handleUpdateTodo = (evt) => {
		evt.preventDefault();
		updateTodo(id, editedTodo);
		toggleIsEditing(false);
		setEditedTodo("");
	};

	return (
		<form className="Todo__edit-form" onSubmit={handleUpdateTodo}>
			<input
				className="Todo__edit-input"
				type="text"
				name="editedTodo"
				value={editedTodo}
				onChange={handleChange}
				autoFocus
			/>
			<button className="Todo__update-btn">
				<i className="far fa-save"></i>
			</button>
		</form>
	);
}

export default EditTodoForm;
