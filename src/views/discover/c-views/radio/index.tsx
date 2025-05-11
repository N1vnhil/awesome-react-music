import {memo} from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Radio: React.FC<IProps> = () => {
  return (
    <div>
      Radio
    </div>
  )
}

export default memo(Radio)
