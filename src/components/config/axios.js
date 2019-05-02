let axios = require("axios");
let jwtDecode = require("jwt-decode");
// let _ = require("lodash");

axios.defaults.baseURL = "https://el-vocero-back.herokuapp.com";
exports.getAds = axios
  .get("ads")
  .then(result => {
    return result.data;
  })
  .catch(err => {
    return err;
  });

exports.sendMessage = postMessage => {
  return axios.post("/messages", postMessage);
};

exports.getMessages = userId => {
  return axios.get(`/messages/${userId}`);
};

exports.createAd = async (post, formData) => {
  post.active = 1;
  post.user = await axios.get(`users/${post.userId}`);
  post.user = post.user.data;
  await axios.post("/ads", post).then(res => {
    formData.append("adId", res.data.item._id);
    return axios.post("/images", formData);
  });
};

exports.saveImage = async formData => {
  await axios.post("/images", formData);
};
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

exports.getImage = id =>
  axios
    .get(`images/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => err);

exports.getCategories = axios
  .get("categories")
  .then(res => {
    return res;
  })
  .catch(err => {
    return err;
  });

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
  } else return {};
};

//TODO create cart
