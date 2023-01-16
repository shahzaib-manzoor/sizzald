import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Routes from './routes'
import {BrowserRouter as Router } from 'react-router-dom'
function App() {

    console.log('App render')


  
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App
