const experss = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDb = require("./config/DbConnect");
// const errorHandler = require("./middleware/errorHandling");
require("dotenv").config();

connectDb();

const PORT = process.env.PORT || 5000;
const app = experss();

app.use(cors());
app.use(experss.json());

// data

// app.use("/api/data", require("./routes/dataRoute"));

//admin

// app.use("/api/admin", require("./routes/adminUserRoute"));

// user;

app.use("/api/user", require("./routers/userRoute"));

// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
