import { generateMedia } from 'styled-media-query'

// メディアクエリの定義
export const customMedia = generateMedia({
  largeDesktop: '1400px',
  smallDesktop: '1200px',
  tablet: '768px',
  mobile: '480px',
})
