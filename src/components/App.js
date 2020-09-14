import "todomvc-app-css/index.css";

import React from "react";
import { Header } from "./Header";
import { MainSection } from "./MainSection";
import { Footer } from "./Footer";
import { Info } from "./Info";

const App = () => {
  return (
    <>
      <section className="todoapp">
        <Header />
        <MainSection />
        <Footer />
      </section>
      <Info />
    </>
  );
};

export default App;
