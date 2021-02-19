import { setToken, getUserFromToken, removeToken } from "./TokenService";

const BASE_URL = "http://localhost:3001/";

function signup(user) {
  return fetch(BASE_URL + "register", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) return res.json();
      // Probably a duplicate email
      throw new Error("Email already taken!");
    })
    .then(({ token }) => setToken(token));
}

function login(credentials) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(credentials),
  })
    .then((res) => {
      if (res.ok) return res.json();
      // Probably a duplicate email
      throw new Error("Bad credentials");
    })
    .then(({ token }) => setToken(token));
}

function logout() {
  return removeToken();
}

function getUser() {
  return getUserFromToken();
}

export { signup, getUser, login, logout };
