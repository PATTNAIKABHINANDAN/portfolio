import './App.css';
import { Link } from "react-scroll";
import Navbar from './components/navbar/Navbar.js';
import Banner from './components/banner/Banner.js';
import Features from './components/features/Features.js';
import Project from './components/projects/Project.js';
import Resume from './components/resume/Resume.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
        <div className='max-w-screen-2xl mx-auto px-16'>
          <Navbar/>      
          <Banner/>
          <Features/>
          <Project/>
          <Resume/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
