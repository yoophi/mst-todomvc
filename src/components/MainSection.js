import React from "react";
import classnames from "classnames";

export const MainSection = ({ todos }) => (
  <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {todos.map((el, idx) => (
        <li
          className={classnames({ completed: el.completed === true })}
          key={idx}
        >
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={el.completed === true}
            />
            <label>{el.text}</label>
            <button className="destroy" />
          </div>
          <input className="edit" value="Create a TodoMVC template" />
        </li>
      ))}
    </ul>
  </section>
);
