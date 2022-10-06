const express = require("express");
const app = express();
const { PORT } = require("dotenv").config().parsed;
const cors = require("cors");
const morgan = require("morgan");

app.use(
  express.json(),
  morgan(":method :url :status :response-time ms"),
  cors()
);

const NavesRouter = require("../routes/navesRouter");
app.use("/naves", NavesRouter);

app.listen(PORT, console.log(`Server running at Port: ${PORT}`));
