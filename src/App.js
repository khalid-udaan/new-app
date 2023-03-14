import React from "react";
import Navbar from "./Component/Navbar";
import Courses from "./Component/pages/Courses";
import Abouts from "./Component/pages/Abouts";
import Contact from "./Component/pages/Contact";
import Blog from "./Component/pages/Blog";
import FAQ from "./Component/pages/FAQ";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingUp from "./Component/Authentication/SingUp";
import LogIn from "./Component/Authentication/LogIn";
import PageNotfound from "./Component/pages/PageNotfound";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Courses/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/about" element={<Abouts/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/user" element={<SingUp/>}/>
          <Route path="*" element={<PageNotfound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
