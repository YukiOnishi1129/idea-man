import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import IdeaContext from '../contexts'

export type TProps = {
  radio: boolean
}

export const Box = styled.div`
  width: ${({ radio }: TProps) => (radio ? '45%' : '30%')};
  height: 200px;
`
export const Word = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid;
  background: #f5fffa;
`

const IdeaBox: FC = () => {
  const { ideas } = useContext(IdeaContext)
  return (
    <Box radio={ideas.radio}>
      <Word />
    </Box>
  )
}

export default IdeaBox
