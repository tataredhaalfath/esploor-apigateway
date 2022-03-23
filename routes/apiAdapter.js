const axios = require("axios");
const { TIME_OUT } = process.env;

module.exports = (baseURL) => {
  return axios.create({
    baseURL,
    timeout: parseInt(TIME_OUT),
  });
};
