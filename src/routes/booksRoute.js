const BookRepository = require('../repositories/BookRepository');
const BookService = require('../services/BookService');
const BookController = require('../controllers/BookController');

const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

const bookValidationMiddleware = require('../middlewares/bookValidationMiddleware');

const booksRoute = (router) => {
  router
    .get('/books', bookController.getBooks)
    .get('/books/:id', bookController.getBook)
    .post('/books', bookValidationMiddleware, bookController.createBook)
    .put('/books/:id', bookController.updateBook)
    .delete('/books/:id', bookController.deleteBook);
};

module.exports = booksRoute;
