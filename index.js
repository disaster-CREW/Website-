const express = require("express");
const path = require("path");
const app = express();

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Terms of Service
app.get("/tos.html", (req, res) => {
  res.sendFile(path.join(__dirname, "tos.html"));
});

// Privacy Policy
app.get("/privacy.html", (req, res) => {
  res.sendFile(path.join(__dirname, "privacy.html"));
});

// Start the server
app.listen(3000, () => {
  console.log("Website running on port 3000");
});
