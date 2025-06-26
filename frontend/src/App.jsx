import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BrandCard from './components/BrandCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='brands-container'>
        <BrandCard/>
        <BrandCard/>
        <BrandCard/>
      </div>
    </>
  )
}

export default App
