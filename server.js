const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Express app is running on port ${PORT}`);
});
