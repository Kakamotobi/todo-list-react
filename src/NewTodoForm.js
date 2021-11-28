import React, { useContext } from "react";
import { DispatchContext } from "./context/TodosContext.js";
import useInputState from "./hooks/useInputState.js";
import "./NewTodoForm.css";

function NewTodoForm() {
	const dispatch = useContext(DispatchContext);

	const [value, handleChange, reset] = useInputState("");

	const handleSubmit = (evt) => {
		evt.preventDefault();
		value.trim() !== "" && dispatch({ type: "ADD_TODO", todo: value });
		reset();
	};

	return (
		<form className="NewTodoForm" onSubmit={handleSubmit}>
			<input
				className="NewTodoForm__input"
				type="text"
				name="todo"
				value={value}
				onChange={handleChange}
				placeholder="Add new todo"
			/>
			<button className="NewTodoForm__add-btn" type="submit">
				<i className="fas fa-plus" />
			</button>
		</form>
	);
}

export default NewTodoForm;
