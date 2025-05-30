import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './assets/css/index.less'

import { HashRouter } from 'react-router-dom'
import App from '@/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <HashRouter>
    <App/>
  </HashRouter>
)
