import React from "react";
import classnames from "classnames";

export const MainSection = ({ todos, handleToggleTodo, handleDestroyTodo }) => (
  <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {todos.map((todo, idx) => (
        <li
          className={classnames({ completed: todo.completed === true })}
          key={idx}
        >
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onClick={() => {
                handleToggleTodo(todo);
              }}
              checked={todo.completed === true}
            />
            <label>{todo.text}</label>
            <button
              className="destroy"
              onClick={() => {
                handleDestroyTodo(todo);
              }}
            />
          </div>
          <input className="edit" value="Create a TodoMVC template" />
        </li>
      ))}
    </ul>
  </section>
);
