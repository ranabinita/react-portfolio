import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

function Home(){
    return(
        <div className="min-h-screen bg-white">
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <Skills/>
                <Projects/>
                <Experience/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}
export default Home;