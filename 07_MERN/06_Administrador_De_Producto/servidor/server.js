const express = require("express");
const app = express();
const cors = require("cors");

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const AllMyProductRoutes = require("./server/routes/product.routes");
AllMyProductRoutes(app);

app.listen(8000, () => console.log("The server is running on port 8000"));
