const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// hook up logging middleware
app.use(morgan('dev'));

// parse html request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
  console.log('http://localhost:8080');
});
