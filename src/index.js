import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Retail from "./pages/Retail";
import Singlecourse from "./pages/Singlecourse";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



ReactDOM.render(
  
  <Router>
  <Navbar/>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/about" element={<About />} />       
      <Route path="/retail" element={<Retail />} />  
      <Route path="/retail/singlecourse" element={<Singlecourse />} />  

    retail
  </Routes>
  <Footer />
  </Router>,

  document.getElementById("root")
);

