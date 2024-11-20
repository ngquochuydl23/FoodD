const orderService = require("../Services/OrderService");
class OrderController {
  create = async (req, res) => {
    try {
      const data = req.body;
      const result = await orderService.create(data);
      if (result === 2) {
        return res.status(400).json("Đồ ăn này đã có trong giỏ hàng");
      }
      return res.status(200).json(result);
    } catch (error) {
      console.log(error.message);

      return res.status(500).json(error.message);
    }
  };
  getAll = async (req, res) => {
    try {
      const result = await orderService.getAll();
      return res.status(200).json(result);
    } catch (error) {
      console.log(error.message);

      return res.status(500).json(error.message);
    }
  };
  getOne = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await orderService.getOne(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
  updateMany = async (req, res) => {
    try {
      const data = req.body;
      const result = await orderService.updateMany();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
  delete = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await orderService.delete(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
}
module.exports = new OrderController();
