const mongoose = require("mongoose");
async function connectFoodD() {
  try {
    mongoose.connect(
      "mongodb+srv://thaibao:123@cluster0.4toawde.mongodb.net/FoodD?retryWrites=true&w=majority"
    );
    console.log("Connect FoodD thành công !!!");
  } catch (error) {
    console.log("Connect không thành công");
  }
}
module.exports = { connectFoodD };
