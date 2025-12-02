
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Projectjs from './Components/Projectjs'
import Skills from './Components/Skill'

function App() {
 

  return (
    <div  className="relative h-screen  bg-white dark:bg-gray-800">
      <Header/>
      <Hero/>
      <Projectjs/>
      <Skills/>
      <Footer/>
      
    
    </div>
  )
}

export default App
