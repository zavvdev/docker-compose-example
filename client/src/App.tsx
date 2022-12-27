import { useEffect, useState } from 'react'
import logo from './assets/logo.png'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('/api/list').then((res) => {
      return res.json().then(setList)
    })
  }, [setList])

  return (
    <div>
      <img src={logo} />
      <h1>{list.length > 0 ? JSON.stringify(list) : 'Loading..'}</h1>
    </div>
  )
}

export default App
