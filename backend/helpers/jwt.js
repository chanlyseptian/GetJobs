const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY||'bebas';

const tokenGenerator = (data) => {
  const { username } = data;
  return jwt.sign({ username }, secretKey);
};

const tokenVerifier = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { tokenGenerator, tokenVerifier };