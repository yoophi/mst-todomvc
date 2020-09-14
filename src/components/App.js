import "todomvc-app-css/index.css";

import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { MainSection } from "./MainSection";
import { Footer } from "./Footer";
import { Info } from "./Info";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "Taste JavaScrip",
      completed: true,
    },
    {
      id: 1,
      text: "Buy a unicorn",
      completed: false,
    },
  ]);

  const handleSave = (value) => {
    const todo = {
      text: value,
      completed: false,
      id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    };
    setTodos([...todos, todo]);
  };

  const toggleTodo = (todoToToggle) => {
    const _todos = todos.map((todo, idx) => {
      if (todo.id === todoToToggle.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodos(_todos);
  };

  const destroyTodo = (todoToDestroy) => {
    const _todos = todos.filter((todo) => {
      return todo.id !== todoToDestroy.id;
    });

    setTodos(_todos);
  };

  return (
    <>
      <section className="todoapp">
        <Header newTodo={true} onSave={handleSave} />
        <MainSection
          todos={todos}
          handleToggleTodo={toggleTodo}
          handleDestroyTodo={destroyTodo}
        />
        <Footer />
      </section>
      <Info />
    </>
  );
};

export default App;
