const fs = require('fs');
const pdf = require('pdf-parse');
const express = require('express');
const app = express();
const port = 3000;
const { Configuration, OpenAIApi } = require("openai");

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});