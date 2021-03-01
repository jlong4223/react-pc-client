const BASE_URL = "http://localhost:3001/events";

export function fetchEventData() {
  return fetch(BASE_URL).then((res) => res.json());
}
