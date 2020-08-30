declare module 'idea' {
  export type IdeaContextType = {
    ideas: string[]
    setIdeas: React.Dispatch<React.SetStateAction<string[]>>
  }
}
