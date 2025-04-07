class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  getBooks = async (req, res) => {
    try {
      const booksResult = await this.bookService.getBooks();

      if (!booksResult) throw new Error('Books not found');

      res.status(200).json(booksResult);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  getBook = async (req, res) => {
    try {
      const { id } = req.params;

      const bookResult = await this.bookService.getBook(id);

      if (!bookResult) throw new Error('Not Found');

      res.status(200).json(bookResult);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  createBook = async (req, res) => {
    try {
      const { title, cover, numPages, author, publisher } = req.body;

      const data = { title, cover, numPages, author, publisher };

      const dataResult = await this.bookService.createBook(data);

      res
        .status(201)
        .json({ message: 'New book created successfully', data: dataResult });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  updateBook = async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;

      await this.bookService.updateBook(id, data);

      res.status(200).json({ message: 'Book updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  deleteBook = async (req, res) => {
    try {
      const { id } = req.params;

      const bookResult = await this.bookService.deleteBook(id);

      if (!bookResult) throw new Error('Book to delete not found');

      res
        .status(200)
        .json({ message: 'Book deleted successfully', data: bookResult });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}

module.exports = BookController;
