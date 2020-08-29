import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import IdeaContext from '../contexts'
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
  const { ideas } = useContext(IdeaContext)
  return (
    <Field radio={ideas.radio}>
      <IdeaBox />
      <MultiIcon>×</MultiIcon>
      <IdeaBox />
      {!ideas.radio && (
        <>
          <MultiIcon>×</MultiIcon>
          <IdeaBox />
        </>
      )}
    </Field>
  )
}

export default IdeaArea
