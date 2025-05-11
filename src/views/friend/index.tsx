import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Friend: React.FC<IProps> = () => {
  return <div>Friend</div>
}

export default memo(Friend)
