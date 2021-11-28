import React, { useContext } from "react";
import { DispatchContext } from "./context/TodosContext.js";
import useInputState from "./hooks/useInputState.js";

function EditTodoForm({ id, todo, toggleIsEditing }) {
	const dispatch = useContext(DispatchContext);

	const [value, handleChange, reset] = useInputState(todo);

	const handleUpdateTodo = (evt) => {
		evt.preventDefault();
		dispatch({ type: "UPDATE_TODO", id, editedTodo: value });
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
