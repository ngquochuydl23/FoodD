const orderModel = require("../Models/orderModels");
class OrderService {
  create = async (data) => {
    const exist = await orderModel.findOne({
      $and: [{ food_id: data.food_id }, { status: false }],
    });
    if (exist) {
      return 2;
    }
    const food = new orderModel(data);
    return await food.save();
  };
  getAll = async () => {
    return await orderModel.find();
  };
  getOne = async (id) => {
    return await orderModel.findById(id);
  };
  updateMany = async () => {
    return await orderModel.updateMany({ status: false }, { status: true });
  };
  delete = async (id) => {
    return await orderModel.findByIdAndDelete(id);
  };
}
module.exports = new OrderService();
