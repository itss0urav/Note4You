const express = require("express");
const connectDB = require("./config/connection");
const app = express();
const userRoutes = require("./routes/userRoutes");

const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
connectDB();

//middleware
app.use(express.json());
app.use(cors());

app.use("/", userRoutes);


app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
