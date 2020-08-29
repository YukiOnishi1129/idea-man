import React, { FC } from 'react'
import styled from 'styled-components'

import RadioArea from './components/RadioArea'
import ActionButton from './components/Button'

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  width: 60%;
  box-sizing: border-box;
`

export const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
`

const App: FC = () => {
  return (
    <Wrapper>
      <Title>アイデアマン</Title>
      <RadioArea />
      <ActionButton />
    </Wrapper>
  )
}

export default App
