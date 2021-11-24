import React, { useContext } from "react";
import { TodosContext } from "./context/TodosContext.js";
import useInputState from "./hooks/useInputState.js";

function EditTodoForm({ id, todo, toggleIsEditing }) {
	const { updateTodo } = useContext(TodosContext);

	const [value, handleChange, reset] = useInputState(todo);

	const handleUpdateTodo = (evt) => {
		evt.preventDefault();
		updateTodo(id, value);
		reset();
		toggleIsEditing(false);
	};

	return (
		<form className="Todo__edit-form" onSubmit={handleUpdateTodo}>
			<input
				className="Todo__edit-input"
				type="text"
				name="editedTodo"
				value={value}
				onChange={handleChange}
				autoFocus
			/>
			<button className="Todo__update-btn">
				<i className="far fa-save" />
			</button>
		</form>
	);
}

export default EditTodoForm;
