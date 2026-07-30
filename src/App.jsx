import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Membership from "./Membership";
import Contact from "./Contact";
import RegistrationForm from "./RegistrationForm";

export default function App() {
  return (
    <BrowserRouter basename="/mCk-official">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/registrationForm" element={<RegistrationForm/>}/> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
