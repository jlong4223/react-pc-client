// const BASE_URL = "http://localhost:3001/events";
const BASE_URL = "https://node-mysql-pc-api.herokuapp.com/events";

export function fetchEventData() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function addEventData(event) {
  return fetch(BASE_URL, {
    body: JSON.stringify(event),
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
