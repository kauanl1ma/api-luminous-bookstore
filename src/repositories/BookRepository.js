const Book = require('../models/Book');

class BookRepository {
  getAllDocuments = async () => {
    try {
      const documents = await Book.find();

      return documents;
    } catch (error) {
      console.log(error);
    }
  };

  getDocumentById = async (id) => {
    try {
      const document = await Book.findById(id).exec();

      return document;
    } catch (error) {
      console.log(error);
    }
  };

  saveDocument = async ({ title, cover, numPages, author, publisher }) => {
    try {
      const data = { title, cover, numPages, author, publisher };

      const document = await this.#createDocument(data);

      const dataResult = await document.save();

      return dataResult;
    } catch (error) {
      console.log(error);
    }
  };

  getDocumentByIdAndUpdate = async (id, data) => {
    try {
      await Book.findByIdAndUpdate(id, { $set: data });
    } catch (error) {
      console.log(error);
    }
  };

  getDocumentByIdAndDelete = async (id) => {
    try {
      const bookResult = await Book.findByIdAndDelete(id);

      return bookResult;
    } catch (error) {
      console.log(error);
    }
  };

  #createDocument = async ({ title, cover, numPages, author, publisher }) => {
    try {
      const data = { title, cover, numPages, author, publisher };

      if (!data) throw new Error();

      return new Book(data);
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = BookRepository;
