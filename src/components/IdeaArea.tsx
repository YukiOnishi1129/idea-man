import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import IdeaContext from '../contexts'

export type TProps = {
  radio: boolean
}

export const Field = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  width: ${({ radio }: TProps) => (radio ? '60%' : '90%')};
`

export const Box = styled.div`
  width: ${({ radio }: TProps) => (radio ? '45%' : '30%')};
  height: 200px;
`
export const Word = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid;
  background: #f5fffa;
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
      <Box radio={ideas.radio}>
        <Word />
      </Box>
      <MultiIcon>×</MultiIcon>
      <Box radio={ideas.radio}>
        <Word />
      </Box>
      {!ideas.radio && (
        <>
          <MultiIcon>×</MultiIcon>
          <Box radio={ideas.radio}>
            <Word />
          </Box>
        </>
      )}
    </Field>
  )
}

export default IdeaArea
