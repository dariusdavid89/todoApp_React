import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { ThemeSwitch } from "./ThemeSwitch";
import "./Todo.css";
import circleURL from "../../assets/images/icon-check.svg";
import crossURL from "../../assets/images/icon-cross.svg";

export function Todo() {
	const [todos, setTodos] = useState<TodoItem[]>([]);
	function addTodo(todo: TodoItem) {
		const todosCopy: TodoItem[] = JSON.parse(JSON.stringify(todos));
		todosCopy.unshift(todo);
		setTodos(todosCopy);
		console.log("kulso addtodo lefuttatva");
	}
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
					<AddTodo onSubmit={addTodo} />
					<ul className="todo-container">
						{todos.map(({ value }) => (
							<li className="todo-item">
								<div className="circle-container">
									<div className="circle">
										<img
											className="circle-url"
											src={circleURL}
											alt="circle Img"
										/>
									</div>
									<span>{value}</span>
								</div>
								<div className="cross">
									<img src={crossURL} alt="cross Img" />
								</div>
							</li>
						))}
					</ul>
					<div className="footer">
						<button className="item-btn">items left</button>
						<div className="btn-container">
							<button className="all-btn">All</button>
							<button className="active-btn">Active</button>
							<button className="comleted-btn">Completed</button>
						</div>
						<button className="clear-btn">Clear Completed</button>
					</div>
				</div>
			</div>
		</>
	);
}

export type TodoItem = { value: string; status: "completed" | "uncompleted" };
