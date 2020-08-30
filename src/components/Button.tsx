import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import IdeaContext from '../contexts/idea'
import KeywordContext from '../contexts/keyword'
import randumCount from '../utils/random-utils'

export const ActionButton = styled.div`
  cursor: pointer;
  margin: 50px auto;
  padding: 5px 10px;
  width: 100px;
  text-align: center;
  background: #00416d;
  transition: all 0.3s ease;
  color: #f5f1da;
  border-radius: 5px;
  font-size: 30px;
  user-select: none;

  &:hover {
    background-color: #116dab;
    box-shadow: 2px 2px #668ad8;
  }
`

export const Button: FC = () => {
  const { ideas } = useContext(IdeaContext)
  const { keywords, setKeywords } = useContext(KeywordContext)
  const clickAction = (): void => {
    const newWord1 = [...keywords]
    const ram1 = randumCount(ideas.length)
    const ram2 = randumCount(ideas.length, ram1)
    const ram3 = randumCount(ideas.length, ram1, ram2)
    newWord1[0] = ideas[ram1]
    newWord1[1] = ideas[ram2]
    newWord1[2] = ideas[ram3]
    setKeywords(newWord1)
  }

  return <ActionButton onClick={clickAction}>実行</ActionButton>
}

export default Button
