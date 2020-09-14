import "todomvc-app-css/index.css";

import React from "react";
import { Header } from "./Header";
import { MainSection } from "./MainSection";
import { Footer } from "./Footer";
import { Info } from "./Info";

const App = ({ todos }) => {
  return (
    <>
      <section className="todoapp">
        <Header />
        <MainSection todos={todos} />
        <Footer />
      </section>
      <Info />
    </>
  );
};

export default App;
