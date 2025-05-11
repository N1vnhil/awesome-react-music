import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { lazy } from 'react'

const Discover = lazy(() => import('@/views/discover'))
const My = lazy(() => import('@/views/discover'))
const Friend = lazy(() => import('@/views/discover'))
const Download = lazy(() => import('@/views/discover'))

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
