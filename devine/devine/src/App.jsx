import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WorkExperience />
        <Education />
        <Skills />
      </div>
    </>
  )
}

export default App
