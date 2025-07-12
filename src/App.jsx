import React from "react";
import Home from './pages/Home';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className='font-sora scroll-smooth overflow-x-hidden'>
            <Navbar/>
            <Home/>
            <Skills/>
            <About/>
            <Projects/>
            <Contact/>

            <Footer/>
        </div>
    );
};

export default App;