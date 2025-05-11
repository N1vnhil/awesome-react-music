import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const My: React.FC<IProps> = () => {
  return <div>My</div>
}

export default memo(My)
