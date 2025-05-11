import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { lazy } from 'react'

const Discover = lazy(() => import('@/views/discover'))
const Album = lazy(() => import('@/views/discover/c-views/album'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Playlist = lazy(() => import('@/views/discover/c-views/playlist'))
const Radio = lazy(() => import('@/views/discover/c-views/radio'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))


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
    element: <Discover/>,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend"/>
      },
      {
        path: '/discover/album',
        element: <Album/>
      },
      {
        path: '/discover/artist',
        element: <Artist/>
      },
      {
        path: '/discover/playlist',
        element: <Playlist/>
      },
      {
        path: '/discover/radio',
        element: <Radio/>
      },
      {
        path: '/discover/ranking',
        element: <Ranking/>
      },
      {
        path: '/discover/recommend',
        element: <Recommend/>
      },
    ]
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
