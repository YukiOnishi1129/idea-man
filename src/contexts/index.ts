import { createContext } from 'react'

type IdeaType = {
  radio: boolean
  data: string[]
}

type IdeaContext = {
  ideas: IdeaType
  setIdeas: React.Dispatch<React.SetStateAction<IdeaType>>
}

// Contextを定義
const IdeaContext = createContext({} as IdeaContext)

export default IdeaContext
