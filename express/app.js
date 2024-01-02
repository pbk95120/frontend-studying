const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running.");
});
