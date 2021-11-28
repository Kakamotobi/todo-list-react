import React, { useContext } from "react";
import { TodosContext, DispatchContext } from "./context/TodosContext.js";
import "./Footer.css";

function Footer() {
	const todos = useContext(TodosContext);
	const dispatch = useContext(DispatchContext);

	const remainingTodos = todos.filter((t) => !t.isComplete);

	const handleRemoveAll = () => {
		dispatch({ type: "REMOVE_ALL" });
	};

	return (
		<footer className="Footer">
			<em className="Footer__desc">
				You have{" "}
				<span className="Footer__remaining">{remainingTodos.length}</span> tasks
				remaning.
			</em>
			<button
				className="Footer__clear-all-btn"
				type="button"
				onClick={handleRemoveAll}
			>
				Clear All
			</button>
		</footer>
	);
}

export default Footer;
