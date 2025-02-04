import react from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Collaboration from './components/collaboration/Collaboration'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
     <Services/>
     <MyWork/>
     <Collaboration />
     <Contact/>
     <Footer/>
      </div>
  )
}

export default App


