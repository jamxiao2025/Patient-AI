const fs = require('fs');
const pdf = require('pdf-parse');
const express = require('express');
const app = express();
const port = 8000;
const functions = require('./functions')
const cors = require('cors');
const multer = require('multer');
const path = require('path');

// Define the file upload endpoint
app.use(cors());
const storage = multer.diskStorage({
    destination: './uploads',
    filename: function(req, file, cb){
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
const upload = multer({ storage: storage }).single('file');

app.post('/upload',  (req, res) => {
    upload(req, res, async (err) => {
      if(err){
        res.status(500).send({ error: err.message });
      } else {
        console.log(req.file)
        const text = await functions.pdfToText(req.file.path)
        const deIdentifiedText = await functions.gptDeIdentify(text)
        console.log(deIdentifiedText.choices[0].text)
        const html = await functions.diffChecker(text, deIdentifiedText.choices[0].text)
        console.log(html)
        //res.send({data: deIdentifiedText.choices[0].text});
        res.send({data: html, text: deIdentifiedText.choices[0].text})
      }
    });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});