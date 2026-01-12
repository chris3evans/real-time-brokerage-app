import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch(API_URL + '/profile')
      .then(res => res.json())
      .then(data => {
        console.log(data) 
        setMessage(data.username)
  })
      .catch(() => setMessage('API is not responding'))
  }, [])

  return (
    <div className="container">
      <h1>Trading App Skeleton Is Getting Developed!</h1>
      <p>API Status: <strong>{message}</strong></p>
    </div>
  )
}

export default App