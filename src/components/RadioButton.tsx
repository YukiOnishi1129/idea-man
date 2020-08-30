import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import RadioContext from '../contexts/radio'

export type TProps = {
  radio: boolean
}

export const ButtonLabel = styled.label`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 45px;
  line-height: 45px;
  border: 2px solid #006dd9;
  background-color: ${({ radio }: TProps) => (radio ? '#E2EDF9;' : '')};
  border-radius: 5px;
  text-align: center;
  color: #b20000;

  input[type='radio'] {
    display: none;
  }
`

const RadioButton: FC<{ num: number }> = ({ num }) => {
  const { radio, setRadio } = useContext(RadioContext)
  const changeRadio = num === 2 ? true : false
  const currentChecked = num === 2 ? radio : !radio
  const propsRadio =
    (num === 2 && radio) || (num === 3 && !radio) ? true : false
  return (
    <ButtonLabel radio={propsRadio}>
      <input
        type="radio"
        name="number"
        checked={currentChecked}
        onChange={() => setRadio(changeRadio)}
      />
      <span>{num}個</span>
    </ButtonLabel>
  )
}

export default RadioButton
