import React, { FC, useState } from 'react'
import styled from 'styled-components'
import IdeaContext from './contexts'

import RadioArea from './components/RadioArea'
import ActionButton from './components/Button'
import IdeaArea from './components/IdeaArea'

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  width: 60%;
  box-sizing: border-box;
  border: 1px solid;
`

export const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
`

export const initailState: {
  radio: boolean
  data: string[]
} = {
  radio: true,
  data: ['猫', '庭', 'ストロー', '雨', '傘', 'マンション'],
}

const App: FC = () => {
  const [ideas, setIdeas] = useState(initailState)
  console.log(ideas)
  return (
    <IdeaContext.Provider value={{ ideas, setIdeas }}>
      <Wrapper>
        <Title>アイデアマン</Title>
        <RadioArea />
        <ActionButton />
        <IdeaArea />
      </Wrapper>
    </IdeaContext.Provider>
  )
}

export default App
