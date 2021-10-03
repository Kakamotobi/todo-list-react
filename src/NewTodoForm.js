import React, { Component } from "react";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: "",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		evt.target.firstChild.value !== "" && this.props.addTodo(this.state.todo);
		this.setState({ todo: "" });
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<input
					className="NewTodoForm__input"
					type="text"
					name="todo"
					value={this.state.todo}
					onChange={this.handleChange}
					placeholder="Add new todo"
				/>
				<button className="NewTodoForm__add-btn" type="submit">
					<i className="fas fa-plus"></i>
				</button>
			</form>
		);
	}
}

export default NewTodoForm;
