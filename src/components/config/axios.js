let axios = require("axios");
let jwtDecode = require("jwt-decode");

axios.defaults.baseURL = "http://localhost:3001/";

exports.getAds = axios
  .get("ads")
  .then(result => {
    return result.data;
  })
  .catch(err => {
    return err;
  });
exports.emailCheck = email => {
  return axios.get(`users/email/${email}`);
};
exports.usernameCheck = username => {
  return axios.get(`users/username/${username}`);
};
exports.register = account => {
  return axios.post("users", {
    username: account.username,
    password: account.password,
    email: account.email
  });
};
exports.getItemById = id =>
  axios
    .get(`ads/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => err);

exports.getImages = id =>
  axios
    .get(`images/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => err);

exports.create = id =>
  axios
    .get(`products/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => err);

exports.login = account => {
  let { username, password } = account;
  return axios.post("auth", {
    username: username,
    password: password
  });
};

exports.getUser = () => {
  if (localStorage.token) {
    return jwtDecode(localStorage.token);
  }
};

//TODO create cart
