const express = require('express');
const bookController = require('../controllers/bookController');
const bookService = require('../services/goodreadsService');

const bookRouter = express.Router();

function router(nav) {
  const { getIndex, getById, middleware } = bookController(bookService, nav);

  bookRouter.use(middleware);
  bookRouter.route('/').get(getIndex);
  bookRouter.route('/:id').get(getById);

  // .all((req, res, next) => {
  // .get((req, res) => {
  //   res.render(
  //     'bookView',
  //     {
  //       title: 'Book',
  //       nav,
  //       book: req.book,
  //     },
  //   );
  // });

  return bookRouter;
}

module.exports = router;
