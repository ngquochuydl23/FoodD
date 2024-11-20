const userModels = require("../Models/userModels");
class UserService {
  async createUser(data) {
    try {
      const exist = await userModels.findOne({ phone: data.phone });
      if (exist) {
        return 2;
      }
      const user = new userModels(data);
      return await user.save();
    } catch (error) {
      throw error;
    }
  }
  async updateUser(data) {
    try {
      const exist = await userModels.findById(data._id);
      if (!exist) {
        return 0;
      }
      const rs = await userModels.findByIdAndUpdate(
        exist._id,
        { data },
        { new: true }
      );
      return rs;
    } catch (error) {
      throw error;
    }
  }
  async login(data) {
    try {
      const user = await userModels.findOne({
        phone: data.phone,
        passWord: data.passWord,
      });
      if (!user) {
        return 0;
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new UserService();
