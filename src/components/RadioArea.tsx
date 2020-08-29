import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import IdeaContext from '../contexts'

export const RadioDescription = styled.p`
  text-align: center;
  font-size: 20px;
`

export const ButtonArea = styled.div`
  display: flex;
  margin: 20px auto;
  width: 20%;

  label {
    cursor: pointer;
    margin: 0 auto;
    width: 60px;
  }
`

const RadioArea: FC = () => {
  const { ideas, setIdeas } = useContext(IdeaContext)
  return (
    <>
      <RadioDescription>何個組み合わせる？</RadioDescription>
      <ButtonArea>
        <label>
          <input
            type="radio"
            name="number"
            checked={ideas.radio}
            onChange={() => setIdeas({ ...ideas, radio: true })}
          />
          <span>2個</span>
        </label>
        <label>
          <input
            type="radio"
            name="number"
            checked={!ideas.radio}
            onChange={() => setIdeas({ ...ideas, radio: false })}
          />
          <span>3個</span>
        </label>
      </ButtonArea>
    </>
  )
}

export default RadioArea
