import React, { FC } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
