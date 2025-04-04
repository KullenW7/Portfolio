import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GroceryPage from "./pages/GroceryPage";
import TaskListPage from "./pages/TaskListPage";
import BudgetForm from "./components/BudgetForm";
import CalculatorPage from "./pages/CalculatorPage";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {!["/grocery-list"].includes(location.pathname) && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grocery-list" element={<GroceryPage />} />
        <Route path="/task-list" element={<TaskListPage />} />
        <Route path="/budget-form" element={<BudgetForm />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
