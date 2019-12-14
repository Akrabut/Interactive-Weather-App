export function addFavorite(city) {
  return {
    type: 'ADD_FAVORITE',
    data: city,
  }
}

export function removeFavorite(city) {
  return {
    type: 'REMOVE_FAVORITE',
    data: city,
  }
}