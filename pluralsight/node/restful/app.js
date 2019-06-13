const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Book = require('./models/bookModel');

const app = express();
if (process.env.ENV === 'Test') {
  mongoose.connect('mongodb://localhost/bookAPI-Test');
} else {
  mongoose.connect('mongodb://localhost/bookAPI');
}
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
