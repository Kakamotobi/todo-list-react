import { v4 as uuid } from "uuid";

function todosReducer(state, action) {
	switch (action.type) {
		case "ADD_TODO":
			return [...state, { todo: action.todo, id: uuid() }];
		case "UPDATE_TODO":
			return state.map((t) =>
				t.id === action.id ? { ...t, todo: action.editedTodo } : t
			);
		case "REMOVE_TODO":
			return state.filter((t) => t.id !== action.id);
		case "REMOVE_ALL":
			return [];
		default:
			return state;
	}
}

export default todosReducer;
