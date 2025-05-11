import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'

function App() {

  return (
    <div className="App">
      <div className='nav'>
        <Link to="/discover">发现音乐</Link>
        <Link to="/my">我的音乐</Link>
        <Link to="/friend">关注</Link>
        <Link to="/download">下载</Link>
      </div>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
