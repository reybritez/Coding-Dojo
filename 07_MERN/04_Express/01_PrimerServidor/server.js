import express, { json } from "express";

const app = express();
const port = 5000;

app.listen(port, console.log(`Server started on port: ${port}`));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});
