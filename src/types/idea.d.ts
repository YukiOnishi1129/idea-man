declare module 'idea' {
  export type IdeaType = {
    radio: boolean
    data: string[]
  }
  export type IdeaContextType = {
    ideas: IdeaType
    setIdeas: React.Dispatch<React.SetStateAction<IdeaType>>
  }
}
