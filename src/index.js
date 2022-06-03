const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Program is running on port 3333!" });
});

app.listen(3333);
