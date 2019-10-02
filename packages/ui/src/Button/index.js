import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  &:hover {
    color: green;
  }
`

export default ({children, ...props}) => {
    return <Button className="m-10 p-10 rounded bg-teal-300 text-sm text-white hover:bg-teal-500" {...props}>{children}</Button>
}
