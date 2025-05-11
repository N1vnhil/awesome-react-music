import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import Discover from '@/views/discover'
import My from '@/views/my'
import Friend from '@/views/friend'
import Download from '@/views/download'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/my',
    element: <My />
  },
  {
    path: '/friend',
    element: <Friend />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
