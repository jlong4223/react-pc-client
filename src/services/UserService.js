const BASE_URL = "http://localhost:3001/";

function signup(user) {
  return fetch(BASE_URL + "register", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(user),
  }).then((res) => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error("Email already taken!");
  });
}

export { signup };
