import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-400 p-4 rounded mb-4'>Tailwind Classes</h1>
      <Card username="Satyam" btnText='click me'/>
      <Card username="Om" />
      {/* <Navbar/>
      <Sidebar/> */}
    </>
  )
}

export default App
