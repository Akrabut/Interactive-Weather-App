export function setError(status, name, message) {
  return {
    type: 'SET_ERROR',
    data: {
      status, name, message,
    }
  }
}
