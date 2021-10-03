import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
			editedTodo: this.props.todo,
		};

		this.handleChange = this.handleChange.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
		this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	toggleEdit(evt) {
		this.setState(
			{
				isEditing: !this.state.isEditing,
			},
			() => {
				if (this.state.isEditing) {
					evt.target.parentElement.parentElement.firstChild.firstChild.focus();
				}
			}
		);
	}

	handleUpdateTodo(evt) {
		evt.preventDefault();
		this.props.updateTodo(this.props.id, this.state.editedTodo);
		this.setState({
			isEditing: false,
			editedTodo: "",
		});
	}

	handleRemoveTodo() {
		this.props.removeTodo(this.props.id);
	}

	render() {
		let todoDisplay;

		if (this.state.isEditing) {
			todoDisplay = (
				<form className="Todo__edit-form" onSubmit={this.handleUpdateTodo}>
					<input
						className="Todo__edit-input"
						type="text"
						name="editedTodo"
						value={this.state.editedTodo}
						onChange={this.handleChange}
					/>
					<button className="Todo__update-btn">
						<i className="far fa-save"></i>
					</button>
				</form>
			);
		} else {
			todoDisplay = <p className="Todo__task">{this.props.todo}</p>;
		}

		return (
			<li className="Todo">
				{todoDisplay}
				<button
					className="Todo__toggle-edit-btn"
					type="button"
					onClick={this.toggleEdit}
				>
					<i className="fas fa-edit"></i>
				</button>
				<button
					className="Todo__remove-btn"
					type="button"
					onClick={this.handleRemoveTodo}
				>
					<i className="far fa-check-circle"></i>
				</button>
			</li>
		);
	}
}

export default Todo;
