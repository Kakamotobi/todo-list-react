import { v4 as uuid } from "uuid";

function todosReducer(state, action) {
	switch (action.type) {
		case "ADD_TODO":
			return [...state, { todo: action.todo, id: uuid(), isComplete: false }];
		case "UPDATE_TODO":
			return state.map((t) =>
				t.id === action.id ? { ...t, todo: action.editedTodo } : t
			);
		case "REMOVE_TODO":
			return state.filter((t) => t.id !== action.id);
		case "REMOVE_ALL":
			return [];
		case "CHECK_OFF":
			return state.map((t) =>
				t.id === action.id ? { ...t, isComplete: !t.isComplete } : t
			);
		default:
			return state;
	}
}

export default todosReducer;
