
import type  { ReactNode } from 'react';

interface UserShape{
    children: ReactNode
}

const User1 = ({children} : UserShape) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default User1
