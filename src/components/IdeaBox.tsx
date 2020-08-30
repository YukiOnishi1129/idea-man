import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import IdeaContext from '../contexts/idea'
import RadioContext from '../contexts/radio'

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
  line-height: 178px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 30px;
  border: 1px solid;
  background: #f5fffa;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const IdeaBox: FC = () => {
  const { ideas } = useContext(IdeaContext)
  const { radio } = useContext(RadioContext)
  return (
    <Box radio={radio}>
      <Word>{ideas[5]}</Word>
    </Box>
  )
}

export default IdeaBox
