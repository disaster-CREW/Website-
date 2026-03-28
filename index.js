import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve CSS, images, etc.
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Clean URL: /tos
app.get("/tos", (req, res) => {
  res.sendFile(path.join(__dirname, "tos.html"));
});

// Clean URL: /privacy
app.get("/privacy", (req, res) => {
  res.sendFile(path.join(__dirname, "privacy.html"));
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log("ASTRYX website is running");
});
