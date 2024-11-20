const express = require("express");
const useRouter = express.Router();
const orderController = require("../../Controllers/OrderController");
useRouter.delete("/delete/:id", orderController.delete);
useRouter.post("/buy", orderController.updateMany);
useRouter.get("/get-one/:id", orderController.getOne);
useRouter.get("/get-all", orderController.getAll);
useRouter.post("/create", orderController.create);
module.exports = useRouter;
