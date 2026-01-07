import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:3001/profile')
      .then(res => res.json())
      .then(data => {
        console.log(data, 'DATA')
        setMessage(data.username)
  })
      .catch(() => setMessage('API is not responding'))
  }, [])

  return (
    <div className="container">
      <h1>Trading App Skeleton</h1>
      <p>API Status: <strong>{message}</strong></p>
    </div>
  )
}

export default App