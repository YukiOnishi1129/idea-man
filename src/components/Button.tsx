import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import IdeaContext from '../contexts/idea'
import KeywordContext from '../contexts/keyword'

export const ActionButton = styled.div`
  cursor: pointer;
  margin: 50px auto;
  padding: 5px 10px;
  width: 100px;
  text-align: center;
  background: #00416d;
  color: #f5f1da;
  border-radius: 5px;
  font-size: 30px;
`
// 乱数算出関数
export const randumCount: (
  totalCount: number,
  prevCount1: number,
  prevCount2?: number,
) => number = (totalCount, prevCount1, prevCount2) => {
  const ram = Math.floor(Math.random() * totalCount)
  if (prevCount2 !== undefined && (ram === prevCount1 || ram === prevCount2)) {
    return randumCount(totalCount, prevCount1, prevCount2)
  } else if (ram === prevCount1) {
    return randumCount(totalCount, prevCount1)
  }
  return ram
}

export const Button: FC = () => {
  const { ideas } = useContext(IdeaContext)
  const { keywords, setKeywords } = useContext(KeywordContext)
  const clickAction = (): void => {
    const ram1 = Math.floor(Math.random() * ideas.length)
    const newWord1 = [...keywords]
    newWord1[0] = ideas[ram1]
    const ram2 = randumCount(ideas.length, ram1)
    newWord1[1] = ideas[ram2]
    const ram3 = randumCount(ideas.length, ram1, ram2)
    newWord1[2] = ideas[ram3]
    setKeywords(newWord1)
  }

  return <ActionButton onClick={clickAction}>実行</ActionButton>
}

export default Button
