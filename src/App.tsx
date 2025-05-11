import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  console.log(useRoutes(routes)) // 看看是不是 null 或 undefined
  return (
    <div className="App">
      <div className="main">{useRoutes(routes)}</div>
    </div>
  )
}

export default App
