const userRoute = require("express").Router();
const { UserController } = require("../controllers/");

userRoute.get("/", UserController.getUsers);
userRoute.get("/:id", UserController.getOneUser);

userRoute.post("/register", UserController.register);
userRoute.post("/login", UserController.login);

userRoute.put("/update/:id", UserController.update);

userRoute.delete("/delete/:id", UserController.delete);

module.exports = userRoute;
