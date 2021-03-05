// TODO set location to lakehouse - Find out why this isnt working - it used to - maybe bc I hardcoded the lat and lng in the weather api

export function getCurrentLatLng() {
  // Wrap getCurrentPosition to return a promise
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((pos) =>
      resolve({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      })
    );
  });
}
