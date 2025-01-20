import React, { useState } from "react";
import { TodoItem } from "./Todo";

export function AddTodo({ onSubmit }: AddTodoProps) {
	const [inputValue, setInputValue] = useState("");
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setInputValue("");
		onSubmit({ value: inputValue, status: "uncompleted" });
		console.log("belso onSubmit lefuttatva");
	}
	return (
		<form id="form" onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<div className="circle"></div>
				<input
					onChange={(e) => setInputValue(e.target.value)}
					type="text"
					id="todo-input"
					value={inputValue}
				/>
			</div>
		</form>
	);
}

export type AddTodoProps = { onSubmit: (todo: TodoItem) => void };
