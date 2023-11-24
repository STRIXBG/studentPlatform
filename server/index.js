const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Middleware to set CORS headers
/*app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow all origins (you can specify a specific origin instead)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Add allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Add allowed headers
  next();
});*/

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});