
import './App.css'
import Footer from './Components/Footer'
import Form from './Components/From'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Projectjs from './Components/Projectjs'
import Skills from './Components/Skill'
import Upbutton from './Components/Upbutton'
import { UseGoes } from './Context/GoContext'

function App() {
  let {Home}=UseGoes();

  return (
    <div ref={Home}  className="relative h-screen  bg-white dark:bg-gray-800">
      <Header/>
      <Hero/>
      <Projectjs/>
      <Skills/>
      <Form/>
      <Footer/>
      <Upbutton/>


      
    
    </div>
  )
}

export default App
