import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Knowledge-Cards/Cards'
import QNA from './components/QNA/QNA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Cards></Cards>
      <QNA></QNA>
    </div>
  )
}

export default App
