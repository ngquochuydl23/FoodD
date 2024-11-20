const userService = require("../Services/UserService");
class UserController {
  create = async (req, res) => {
    try {
      const data = req.body;
      const result = await userService.createUser(data);
      if (result === 2) {
        return res.status(400).json("Số điện thoại đã tồn tại");
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
  update = async (req, res) => {
    try {
      const data = req.body;
      const result = await userService.updateUser(data);
      if (result === 0) {
        return res.status(404).json("Người dùng không tồn tại");
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
  login = async (req, res) => {
    try {
      const data = req.body;
      const result = await userService.login(data);
      if (result === 0) {
        return res
          .status(404)
          .json("Số điện thoại hoặc mật khẩu không đúng !!!");
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
}
module.exports = new UserController();
