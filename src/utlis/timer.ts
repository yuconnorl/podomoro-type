const timer = (time: number): string => {
  const minutes = Math.floor(time / 60)
  const second = time % 60

  const zeroSecond = second > 10 ? second : `0${second}`

  return `${minutes}:${zeroSecond}`
}

export default timer
