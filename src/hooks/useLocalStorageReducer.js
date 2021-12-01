import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
	const [state, dispatch] = useReducer(reducer, defaultVal, () => {
		return JSON.parse(window.localStorage.getItem(key)) || defaultVal;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, dispatch];
}

export default useLocalStorageReducer;
