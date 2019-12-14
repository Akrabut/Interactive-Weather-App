export async function setLocation(set) {
  function success(pos) {
    set({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    })
  }
  return navigator.geolocation.getCurrentPosition(success, (err) => err)
}