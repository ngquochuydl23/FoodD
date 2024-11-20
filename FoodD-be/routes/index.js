const userRoute = require("./users/userRoute");
const foodRoute = require("./foods/foodRoute");
const orderRoute = require("./orders/orderRoute");
function routes(app) {
  app.use("/order", orderRoute);
  app.use("/food", foodRoute);
  app.use("/user", userRoute);
}
module.exports = routes;
