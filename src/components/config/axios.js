// let axios = require("axios");
// let jwtDecode = require("jwt-decode");
// let _ = require("lodash");

// axios.defaults.baseURL = "http://localhost:3001/";
// exports.getAds = axios
//   .get("ads")
//   .then(result => {
//     return result.data;
//   })
//   .catch(err => {
//     return err;
//   });

// exports.createAd = async (post, formData) => {
//   post.active = 1;
//   post.user = await axios.get(`users/${post.userId}`);
//   await axios.post("/ads", post).then(res => {
//     formData.append("adId", res.data.item._id);
//     return axios.post("/images", formData);
//   });
// };

// exports.saveImage = async formData => {
//   await axios.post("/images", formData);
// };
// exports.emailCheck = email => {
//   return axios.get(`users/email/${email}`);
// };
// exports.usernameCheck = username => {
//   return axios.get(`users/username/${username}`);
// };
// exports.register = account => {
//   return axios.post("users", {
//     username: account.username,
//     password: account.password,
//     email: account.email
//   });
// };
// exports.getItemById = id =>
//   axios
//     .get(`ads/${id}`)
//     .then(result => {
//       return result.data;
//     })
//     .catch(err => err);

// exports.getImage = id =>
//   axios
//     .get(`images/${id}`)
//     .then(result => {
//       return result.data;
//     })
//     .catch(err => err);

// exports.create = id =>
//   axios
//     .get(`products/${id}`)
//     .then(result => {
//       return result.data;
//     })
//     .catch(err => err);

// exports.login = account => {
//   let { username, password } = account;
//   return axios.post("auth", {
//     username: username,
//     password: password
//   });
// };

// exports.getUser = () => {
//   if (localStorage.token) {
//     return jwtDecode(localStorage.token);
//   } else return {};
// };

// //TODO create cart
