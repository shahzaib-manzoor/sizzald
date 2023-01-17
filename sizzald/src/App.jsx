import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Routes from './routes'
import {BrowserRouter } from 'react-router-dom'
function App() {

    console.log(<Routes/>)

    
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
 
     <Routes exact/>
  
    </BrowserRouter>
  )
}

export default App
