import React from "react";
import { TodosProvider } from "./context/TodosContext.js";

import NewTodoForm from "./NewTodoForm.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";
import "./TodoApp.css";

function TodoApp() {
	return (
		<div className="TodoApp">
			<h1 className="TodoApp__title">To Do List</h1>
			<TodosProvider>
				<TodoList />
				<NewTodoForm />
				<Footer />
			</TodosProvider>
		</div>
	);
}

export default TodoApp;
