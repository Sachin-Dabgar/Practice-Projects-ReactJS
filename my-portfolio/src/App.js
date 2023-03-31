import React from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import SocialLinks from './components/SocialLinks'
import Contact from './components/Contact'

function App() {
    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Portfolio />
            <Skills />
            <Contact />
            <SocialLinks />
        </>
    )
}

export default App