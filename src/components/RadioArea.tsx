import React, { FC } from 'react'
import styled from 'styled-components'
import RadioButton from './RadioButton'

export const RadioDescription = styled.p`
  margin: 20px auto;
  width: 25%;
  text-align: center;
  font-size: 20px;
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  width: 30%;
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
