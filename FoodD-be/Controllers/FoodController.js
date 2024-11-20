const foodService = require("../Services/FoodService");
class FoodController {
  create = async (req, res) => {
    try {
      const data = req.body;
      const result = await foodService.create(data);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
  getAll = async (req, res) => {
    try {
      const result = await foodService.getAll();
      return res.status(200).json(result);
    } catch (error) {
      console.log(error.message);

      return res.status(500).json(error.message);
    }
  };
  getOne = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await foodService.getOne(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
}
module.exports = new FoodController();
