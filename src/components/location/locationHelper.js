export async function setLocation(set) {
  function success(pos) {
    set({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    })
  }
  function error() {
    set({
      // tel aviv's latitude/longitude
      lat: 32.045,
      lon: 34.77,
    })
  }
  try {
    return navigator.geolocation.getCurrentPosition(success, error)
  } catch { return error() }
}