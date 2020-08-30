declare module 'keyword' {
  export type KeywordContextType = {
    keywords: string[]
    setKeywords: React.Dispatch<React.SetStateAction<string[]>>
  }
}
