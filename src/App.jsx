import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

// Your testing components
import HeroSection from './Components/HeoSection';
import DashboardCardsSection from './Components/Dashboard';
import SectionLayout from './Components/Section';

// Pages
import About from "./Pages/About";
import ContactPage from './Pages/Contact';
import Services from "./Pages/Services";
import Footer from './Components/Footer';
import Success from './Pages/Success';
// import Success from "./Pages/Success";

// Optional: Create this if you want a homepage route
function Home() {
  return (
    <>
      <HeroSection />
      <DashboardCardsSection />
      <SectionLayout />
      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
