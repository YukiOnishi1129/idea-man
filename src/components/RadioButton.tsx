import React, { FC } from 'react'
import styled from 'styled-components'

export const ButtonArea = styled.label`
  cursor: pointer;
  margin: 0 auto;
  width: 60px;
`

const RadioButton: FC<{ num: number }> = ({ num }) => {
  return (
    <ButtonArea>
      <input type="radio" name="number" />
      <span>{num}個</span>
    </ButtonArea>
  )
}

export default RadioButton
