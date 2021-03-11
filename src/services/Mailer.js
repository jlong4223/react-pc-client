const BASE_URL = "https://node-mysql-pc-api.herokuapp.com/send";
// const BASE_URL = "http://localhost:3001/send";

export function sendMail(email, message) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(email, message),
  });
}
