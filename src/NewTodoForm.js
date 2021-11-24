import React, { useState } from "react";
import "./NewTodoForm.css";

function NewTodoForm({ addTodo }) {
	const [todo, setTodo] = useState("");

	const handleSubmit = (evt) => {
		evt.preventDefault();
		todo.trim() !== "" && addTodo(todo);
		setTodo("");
	};

	const handleChange = (evt) => {
		setTodo(evt.target.value);
	};
	return (
		<form className="NewTodoForm" onSubmit={handleSubmit}>
			<input
				className="NewTodoForm__input"
				type="text"
				name="todo"
				value={todo}
				onChange={handleChange}
				placeholder="Add new todo"
			/>
			<button className="NewTodoForm__add-btn" type="submit">
				<i className="fas fa-plus"></i>
			</button>
		</form>
	);
}

export default NewTodoForm;
