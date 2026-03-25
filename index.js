const express = require("express");
const app = express();

// Home page

// Terms of Service
app.get("/tos", (req, res) => {
  res.send("Terms of Service page");
});

// Privacy Policy
app.get("/privacy", (req, res) => {
  res.send("Privacy Policy page");
});

// Start the server
app.listen(3000, () => {
  console.log("Website running on port 3000");
});
