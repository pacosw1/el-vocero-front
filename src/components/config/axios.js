let axios = require("axios");

axios.defaults.baseURL = "http://localhost:3001/";

exports.getAds = axios
  .get("ads")
  .then(result => {
    return result.data;
  })
  .catch(err => {
    return err;
  });

exports.getProductById = id =>
  axios
    .get(`products/${id}`)
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

//TODO create cart
