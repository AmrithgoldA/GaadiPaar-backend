require("dotenv").config();
const express = require("express");
const routes = require("./src/routes/loginRoute");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
const port = process.env.PORT || 3002;

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
