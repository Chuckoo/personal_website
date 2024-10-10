import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage";
import React from "react";
import Page from "./pages/Page";

import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const MainPage = () => {
  return (
    <>
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

const App = () => {
  return (
    <div id="top" className="dark app">
      <Header />
      <MainPage />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
