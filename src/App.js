import { Route, Routes } from "react-router-dom";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'



function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>   
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
