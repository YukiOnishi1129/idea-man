import React, { FC } from 'react'
import styled from 'styled-components'
import RadioButton from './RadioButton'
import { customMedia } from '../utils/style-utils'

export const RadioDescription = styled.p`
  margin: 20px auto;
  width: 25%;
  ${customMedia.lessThan('mobile')`
    width: 100%;
  `}
  text-align: center;
  font-size: 20px;
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  width: 40%;
  ${customMedia.lessThan('mobile')`
    width: 100%;
  `}
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
