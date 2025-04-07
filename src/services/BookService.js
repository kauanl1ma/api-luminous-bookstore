class BookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  getBooks = async () => {
    try {
      const booksResult = await this.bookRepository.getAllDocuments();

      return booksResult;
    } catch (error) {
      console.log(error);
    }
  };

  getBook = async (id) => {
    try {
      const booksResult = await this.bookRepository.getDocumentById(id);

      return booksResult;
    } catch (error) {
      console.log(error);
    }
  };

  createBook = async ({ title, cover, numPages, author, publisher }) => {
    try {
      const data = { title, cover, numPages, author, publisher };

      const bookResult = await this.bookRepository.saveDocument(data);

      return bookResult;
    } catch (error) {
      console.log(error);
    }
  };

  updateBook = async (id, data) => {
    try {
      await this.bookRepository.getDocumentByIdAndUpdate(id, data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteBook = async (id) => {
    try {
      const bookResult = await this.bookRepository.getDocumentByIdAndDelete(id);

      return bookResult;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = BookService;
