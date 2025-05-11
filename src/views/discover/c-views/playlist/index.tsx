import {memo} from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Playlist: React.FC<IProps> = () => {
  return (
    <div>
      Playlist
    </div>
  )
}

export default memo(Playlist)
