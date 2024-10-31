import { Routes, Route } from "react-router-dom";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx"
import Home from "./pages/home.jsx"
import Login from "./Components/Login.jsx"
import Signup from "./Components/Signup.jsx";
import Services from "./pages/services.jsx";
import ErateCard from "./Components/ErateCard.jsx"
import './App.css'

function App() {
  return (
    <>
  {/* routes for all the pages */}
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/ErateCard" element={<ErateCard/>}/>
      
      </Routes>
    </>
  )
}

export default App
