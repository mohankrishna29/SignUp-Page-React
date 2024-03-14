import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='nav-bar'>
        <h1>ConnectIn</h1>
        <p>The future of Job Search</p>
      </nav>
      <hr></hr>
      <div className='intro'>
        <h3>Sign up</h3>
        <p>To explore a plethora of opputunities around you</p>
      </div>
    </>
  )
}

export default App
