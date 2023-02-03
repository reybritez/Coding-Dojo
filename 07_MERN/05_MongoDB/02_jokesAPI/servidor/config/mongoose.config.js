const mongoose = require("mongoose");

mongoose.get("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conexion establecida con la db"))
  .catch((err) => console.log("hubo un error", err));
