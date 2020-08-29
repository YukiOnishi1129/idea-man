import React, { FC } from 'react'
import styled from 'styled-components'

export const ActionButton = styled.div`
  cursor: pointer;
  margin: 10px auto;
  padding: 5px 10px;
  width: 60px;
  text-align: center;
  background: #00416d;
  color: #f5f1da;
  border-radius: 5px;
`

export const clickAction = (): void => {
  console.log('クリック')
}

export const Button: FC = () => {
  return <ActionButton onClick={clickAction}>実行</ActionButton>
}

export default Button
