import React, { FC, ReactNode, useState, useEffect } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from '../config/firebase'
import IdeaContext from '../contexts/idea'
import RadioContext from '../contexts/radio'

export const IdeaProvider = IdeaContext.Provider
export const RadioProvider = RadioContext.Provider

export const initailIdeas: string[] = []
export const initailRadio: boolean = true

type ProviderProps = {
  children: ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  // Firebaseの初期化
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()
  const [ideas, setIdeas] = useState(initailIdeas)
  const [radio, setRadio] = useState(initailRadio)

  useEffect(() => {
    const func = async () => {
      await firebase
        .database()
        .ref('data/')
        .once('value')
        .then((snapshot) => {
          setIdeas(snapshot.val())
        })
    }
    func()
  }, [ideas])

  return (
    <IdeaProvider value={{ ideas, setIdeas }}>
      <RadioProvider value={{ radio, setRadio }}>{children}</RadioProvider>
    </IdeaProvider>
  )
}

export default Provider
