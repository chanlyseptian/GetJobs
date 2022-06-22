const { User } = require("../models");
const { decrypt } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jwt");

class UserControlller {
  static async getUsers(req, res) {
    try {
      const users = await User.findAll({
        order: [["id", "asc"]],
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async getOneUser(req, res) {
    try {
      // const id = +req.userData.id;
      const id = +req.params.id;

      const user = await User.findOne({
        where: { id },
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async register(req, res) {
    try {
      const { username, password } = req.body;
      console.log(username);
      const user = await User.create({
        username,
        password,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      let emailFound = await User.findOne({
        where: { username },
      });
      if (emailFound) {
        console.log(emailFound.password);

        if (decrypt(password, emailFound.password)) {
          let token = tokenGenerator(emailFound);
          res.status(200).json({ message: "success", token });
        }
      } else {
        res.status(404).json({ message: "user not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { username, password } = req.body;

      const updatedUser = await User.update(
        {
          username,
          password,
        },
        {
          where: { id },
        }
      );
      updatedUser[0] === 1
        ? res.status(200).json({ message: `user has been updated` })
        : res.status(404).json({ message: `id is not right` });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const result = await User.destroy({
        where: { id },
      });
      res.status(200).json({ message: `deleted` });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

module.exports = UserControlller;
