const express = require("express");
const { resolve } = require("path");
const path = require("path");
const app = express();

//Estaticos rotamento dos componentes
app.use("/", express.static(resolve(__dirname, "dist")));
app.get("/*", (req, res) => {
  res.sendFile(resolve(__dirname, "dist/index.html"));
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server is running on port 3000");
});
