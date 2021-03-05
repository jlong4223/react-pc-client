function setToken(token) {
  token
    ? localStorage.setItem("token", token)
    : localStorage.removeItem("token");
}

function removeToken() {
  localStorage.removeItem("token");
}

function getToken(res) {
  //   let jwt = res.token;
  let token = localStorage.getItem("token");
  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    //check if expired, remove if is
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      token = null;
    }
  }
  return token;
}

function getUserFromToken() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user.name : null;
}

function getUserPicFromToken() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user.pic : null;
}

export {
  setToken,
  getToken,
  getUserFromToken,
  getUserPicFromToken,
  removeToken,
};
