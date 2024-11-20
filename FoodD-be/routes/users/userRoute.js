const express = require("express");
const useRouter = express.Router();
const userController = require("../../Controllers/UserController");
useRouter.post("/signup", userController.create);
useRouter.post("/login", userController.login);
module.exports = useRouter;
