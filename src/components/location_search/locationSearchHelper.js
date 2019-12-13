export const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export function findResults(value) {
  const val = { id: 1, title: 'hi', content: 'greeting', description: 'hello' }
  const val2 = { id: 2, title: 'hooo', content: 'yooo', description: 'yea' }
  return [val, val2]
}