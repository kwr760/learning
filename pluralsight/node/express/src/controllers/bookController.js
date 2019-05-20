const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:booksRoutes');
// const query = require('../../db');

function bookController(bookService, nav) {
  function getIndex(req, res) {
    const url = 'mongodb://localhost:27017';
    const dbName = 'libraryApp';

    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(url);

        const db = client.db(dbName);

        const col = await db.collection('books');
        const books = await col.find().toArray();
        res.render(
          'bookListView',
          {
            title: 'Books',
            nav,
            books,
          },
        );
      } catch (err) {
        debug(err.stack);
      }
      client.close();
    }());
    // (async () => {
    //   const results = await query('SELECT id, title, author FROM books;');
    //   res.render(
    //     'bookListView',
    //     {
    //       title: 'Books',
    //       nav,
    //       books: results,
    //     },
    //   );
    // })();
  }
  function getById(req, res) {
    const { id } = req.params;
    const url = 'mongodb://localhost:27017';
    const dbName = 'libraryApp';

    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(url);

        const db = client.db(dbName);

        const col = await db.collection('books');
        const book = await col.findOne({ _id: new ObjectID(id) });
        debug(book);
        book.details = await bookService.getBookById(book.bookId);
        res.render(
          'bookView',
          {
            title: 'Book',
            nav,
            book,
          },
        );
      } catch (err) {
        debug(err.stack);
      }
      client.close();
    }());
    // (async () => {
    //   const result = await query(`SELECT id, title, author FROM books WHERE ID = ${id};`);
    //   next();
    // })();
  }
  function middleware(req, res, next) {
    // if (req.user) {
      next();
    // } else {
    //   res.redirect('/');
    // }
  }

  return {
    getIndex,
    getById,
    middleware,
  };
}

module.exports = bookController;
