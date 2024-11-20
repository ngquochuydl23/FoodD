const express = require("express");
const app = express();
const cors = require("cors");
const compression = require("compression");
const db = require("./db/index");
const bodyParser = require("body-parser");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const routes = require("./routes/index");
const port = 8089;
const corsOptions = {
  origin: "*",
  allowedHeaders: ["Content-Type"],
};
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
routes(app);
db.connectFoodD();
app.listen(port, () => {
  console.log(`Connect service running on port ${port}`);
});
