declare module 'radio' {
  export type RadioContextType = {
    radio: boolean
    setRadio: React.Dispatch<React.SetStateAction<boolean>>
  }
}
