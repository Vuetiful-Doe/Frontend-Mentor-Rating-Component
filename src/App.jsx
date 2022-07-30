import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { GlobalStyles } from './components/GlobalStyles'
import RatingCard from './components/RatingCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{perspective:"1000px"}}>
      <GlobalStyles/>
      <RatingCard />
    </div>
  )
}

export default App
