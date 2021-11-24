import React from "react";
import "./Footer.css";

function Footer({ todos, removeAll }) {
	return (
		<footer className="Footer">
			<em className="Footer__desc">
				You have <span className="Footer__remaining">{todos.length}</span> tasks
				remaning.
			</em>
			<button
				className="Footer__clear-all-btn"
				type="button"
				onClick={removeAll}
			>
				Clear All
			</button>
		</footer>
	);
}

export default Footer;
