import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  &:hover {
    color: white;
  }
`

export default ({children, ...props}) => {
    return <Button className="m-10 p-8 rounded bg-teal-300 text-sm text-white hover:bg-teal-500" {...props}>{children}</Button>
}
