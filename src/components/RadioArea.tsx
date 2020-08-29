import React, { FC } from 'react'
import styled from 'styled-components'
import RadioButton from './RadioButton'

export const RadioDescription = styled.p`
  text-align: center;
  font-size: 20px;
`

export const ButtonArea = styled.div`
  display: flex;
  margin: 20px auto;
  width: 20%;
`

const RadioArea: FC = () => {
  return (
    <>
      <RadioDescription>何個組み合わせる？</RadioDescription>
      <ButtonArea>
        <RadioButton num={2} />
        <RadioButton num={3} />
      </ButtonArea>
    </>
  )
}

export default RadioArea
