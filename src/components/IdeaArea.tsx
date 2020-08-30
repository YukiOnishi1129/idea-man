import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import RadioContext from '../contexts/radio'
import KeywordContext from '../contexts/keyword'
import IdeaBox from './IdeaBox'

export type TProps = {
  radio: boolean
}

export const Field = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  width: ${({ radio }: TProps) => (radio ? '60%' : '90%')};
`

export const MultiIcon = styled.div`
  width: 20%;
  height: 100%;
  line-height: 200px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`

const IdeaArea: FC = () => {
  const { radio } = useContext(RadioContext)
  const { keywords } = useContext(KeywordContext)
  return (
    <Field radio={radio}>
      <IdeaBox word={keywords[0]} />
      <MultiIcon>×</MultiIcon>
      <IdeaBox word={keywords[1]} />
      {!radio && (
        <>
          <MultiIcon>×</MultiIcon>
          <IdeaBox word={keywords[2]} />
        </>
      )}
    </Field>
  )
}

export default IdeaArea
