import React, { useState } from "react";
import * as classnames from "classnames";

export const Header = (props) => {
  const { editing, newTodo, placeholder, onSave } = props;
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
      if (newTodo) {
        setText("");
      }
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = (e) => {
    if (!newTodo) {
      onSave(e.target.value);
    }
  };

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <input
          className={classnames({
            edit: editing,
            "new-todo": newTodo,
          })}
          type="text"
          placeholder={placeholder}
          autoFocus={true}
          value={text}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleSubmit}
        />
      </header>
    </>
  );
};
