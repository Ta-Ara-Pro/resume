import react from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Collaboration from './components/collaboration/Collaboration'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PortfolioPage from './pages/PortfolioPage'
import GeneralRoute from './components/GeneralRoute'
import data from './components/data/mywork_data'
const App = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <BrowserRouter>
        <Navbar />
        <Routes>


          <Route path='/'
            element={
              <GeneralRoute>
                <Hero />
                <About />
                <Services />
                <MyWork data={data}/>
                {/* <Collaboration /> */}
                <Contact />
              </GeneralRoute>
            }
          />
          <Route path='/portfolio' element={<PortfolioPage />}>

          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App


