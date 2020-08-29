import React, { FC, useState } from 'react'
import styled from 'styled-components'

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
  const [radio, setRadio] = useState(true)
  return (
    <>
      <RadioDescription>何個組み合わせる？</RadioDescription>
      <ButtonArea>
        <label>
          <input
            type="radio"
            name="number"
            checked={radio}
            onChange={() => setRadio(true)}
          />
          <span>2個</span>
        </label>
        <label>
          <input
            type="radio"
            name="number"
            checked={!radio}
            onChange={() => setRadio(false)}
          />
          <span>3個</span>
        </label>
      </ButtonArea>
    </>
  )
}

export default RadioArea
