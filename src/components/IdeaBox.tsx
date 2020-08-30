import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import RadioContext from '../contexts/radio'
import { customMedia } from '../utils/style-utils'

export type TProps = {
  radio: boolean
}

export const Box = styled.div`
  width: ${({ radio }: TProps) => (radio ? '45%' : '30%')};
  height: 200px;
`
export const Word = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 30px;
  border: 1px solid;
  background: #f5fffa;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    ${customMedia.lessThan('mobile')`
      font-size: 20px;
    `}
    font-weight: bold;
    text-align: center;
  }
`

const IdeaBox: FC<{ word: string }> = ({ word }) => {
  const { radio } = useContext(RadioContext)
  return (
    <Box radio={radio}>
      <Word>
        <p>{word}</p>
      </Word>
    </Box>
  )
}

export default IdeaBox
