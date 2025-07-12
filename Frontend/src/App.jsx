import { useState } from 'react'
import './App.css'
import axios from 'axios' // to get data from backend we use axios
import { useEffect } from 'react'

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    axios.get('/api/games')
      .then(response => {
        console.log(response.data)
        setGames(response.data)
      })
      .catch(error => {
        console.error('Error fetching games:', error)
      })
  },[]) // the empty array means that this effect will only run once when the component mounts

  return (
    <>
      <h1>Games</h1>
      <p>Total Games : { games.length }</p>

      <div>
        {games.map(game => (
          <div key={game.id}>
            <h2>{game.name}</h2>
          </div>
        ))  }
      </div>  
    </>
  )
}

export default App


//    axios.get('http://localhost:3000/api/games')
// above will give cors error
// to fix this we need to add cors in backend or use proxy in vite config
// in this app we will use proxy in vite config
// so we will add proxy in vite.config.js file

// proxy makes the frontend and backend communicate without CORS issues as frontend will think that the backend is on the same origin