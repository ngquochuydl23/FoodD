const express = require("express");
const useRouter = express.Router();
const foodController = require("../../Controllers/FoodController");
useRouter.get("/get-one/:id", foodController.getOne);
useRouter.get("/get-all", foodController.getAll);
useRouter.post("/create", foodController.create);
module.exports = useRouter;
