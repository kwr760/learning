const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Book = require('./models/bookModel');

const app = express();
let mongoUrl = 'mongodb://localhost/bookAPI';
if (process.env.ENV === 'Test') {
  mongoUrl += '-Test';
}

mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;

const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});

module.exports = app;
