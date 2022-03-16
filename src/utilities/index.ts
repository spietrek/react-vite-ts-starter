export const timeout = (ms: number): Promise<unknown> => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
