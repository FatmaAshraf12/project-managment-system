const express = require("express");
const colors = require("colors");
require("dotenv").config();
const cors = require("cors");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const app = express();

//connect to db
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(PORT, console.log(`YOUR PORT IS ${PORT}`));
