const express = require("express");
const app = express();

const port = 3000 | process.env;

app.use(express.static("dist"));
app.listen(port, () => {
  console.log("connected");
});
