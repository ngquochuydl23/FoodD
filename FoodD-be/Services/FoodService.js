const foodModel = require("../Models/foodModels");
class FoodService {
  create = async (data) => {
    const food = new foodModel(data);
    return await food.save();
  };
  getAll = async () => {
    return await foodModel.find();
  };
  getOne = async (id) => {
    return await foodModel.findById(id);
  };
}
module.exports = new FoodService();
