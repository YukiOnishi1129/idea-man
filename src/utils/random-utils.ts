// 乱数算出関数
const randumCount: (
  totalCount: number,
  prevCount1?: number,
  prevCount2?: number,
) => number = (totalCount, prevCount1, prevCount2) => {
  const ram = Math.floor(Math.random() * totalCount)
  if (prevCount2 !== undefined && (ram === prevCount1 || ram === prevCount2)) {
    return randumCount(totalCount, prevCount1, prevCount2)
  } else if (prevCount1 !== undefined && ram === prevCount1) {
    return randumCount(totalCount, prevCount1)
  }
  return ram
}

export default randumCount
