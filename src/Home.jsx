import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Intro from './Intro';
import Purpose from './Purpose';
import Build from './Build';
import Mission from './Mission';
import WhyStudentsJoin from './WhyStudentsJoin';
import Event from './Event';
import Projects from './Projects';
import Team from './Team';
import Cordinator from './Cordinator';
import Member from './Member';
import FAQ from './Faq';
import Contact from './Contact';
import Footer from './Footer';

function Home() {

    return (
        <>
            <Navbar />
            <Hero />
            <Intro />
            <Purpose />
            <Build />
            <Mission />
            <WhyStudentsJoin />
            <Event />
            <Projects />
            <Cordinator />
            <Member />
            <FAQ />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
