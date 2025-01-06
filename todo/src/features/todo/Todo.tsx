import { ThemeSwitch } from "./ThemeSwitch";
import "./Todo.css";

export function Todo() {
	return (
		<>
			<div className="bg-light" aria-hidden></div>
			<div className="container">
				<div className="header">
					<h1>Todo</h1>
					<div>
						<ThemeSwitch />
					</div>
				</div>

				<div className="section">
					<form action="todo-input">
						<input type="text" id="todo-input" />
					</form>
					<ul className="todo-container">
						<li className="todo-item">asd</li>
					</ul>
				</div>
			</div>
		</>
	);
}
