const route = require("express").Router();

route.get("/", (req, res) => {
  res.status(200).json({ message: `It's working` });
});

const userRoute = require('./userRoute');
route.use('/users', userRoute);

module.exports = route;