import React from "react"
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import Plans from "./components/plans";
import Gallery from "./components/gallery";
import Trainers from "./components/trainers";
import Login from "./components/login";



function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/contact" element= {<Contact/>} />
      <Route path="/about" element= {<About/>} />
      <Route path="/gallery" element= {<Gallery/>} />
      <Route path="/plans" element= {<Plans/>} />
      <Route path="/trainers" element= {<Trainers/>} />
      <Route path="/login" element= {<Login/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
