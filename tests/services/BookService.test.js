const BookRepository = require("../../src/repositories/BookRepository");
const BookService = require("../../src/services/BookService");

jest.mock("../../src/repositories/BookRepository");

describe("BookService", () => {
  let bookRepositoryMock;
  let bookService;

  beforeEach(() => {
    bookRepositoryMock = new BookRepository();
    bookRepositoryMock.getAllDocuments = jest.fn();
    bookRepositoryMock.saveDocument = jest.fn();

    bookService = new BookService(bookRepositoryMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("BookService.getBooks", () => {
    it("Should call bookRepository.getAllDocuments and return booksList", async () => {
      const bookMock = [
        {
          _id: "67f27017fec686d04b5030cf",
          title: "Test Title 1",
          cover: "Test Cover 1",
          numPages: 100,
          created_at: "2025-04-06T12:14:15.930Z",
          updated_at: "2025-04-06T12:14:15.930Z",
          __v: 0,
        },
        {
          _id: "67f28697332f534ba278f140",
          title: "Test Title 2",
          cover: "Test Cover 2",
          numPages: 100,
          created_at: "2025-04-06T13:50:15.628Z",
          updated_at: "2025-04-06T13:50:15.628Z",
          __v: 0,
        },
      ];

      bookRepositoryMock.getAllDocuments.mockResolvedValue(bookMock);
      const booksList = await bookService.getBooks();

      expect(bookRepositoryMock.getAllDocuments).toHaveBeenCalledTimes(1);
      expect(booksList).toEqual(bookMock);
    });
  });

  describe("BookService.getBook", () => {
    it("Should call bookRepository.getDocumentById and return bookFound", async () => {
      const bookMock = {
        _id: "67f27017fec686d04b5030cf",
        title: "Test Title 1",
        cover: "Test Cover 1",
        numPages: 100,
        created_at: "2025-04-06T12:14:15.930Z",
        updated_at: "2025-04-06T12:14:15.930Z",
        __v: 0,
      };

      bookRepositoryMock.getDocumentById = jest
        .fn(bookMock.id)
        .mockResolvedValue(bookMock);
      const bookFound = await bookService.getBook(bookMock.id);

      expect(bookRepositoryMock.getDocumentById).toHaveBeenCalledWith(
        bookMock.id,
      );
      expect(bookFound).toEqual(bookMock);
    });
  });

  describe("BookService.createBook", () => {
    it("Should call bookRepository.saveDocument and return the bookCreated", async () => {
      const data = {
        title: "Test Title",
        cover: "Test Cover",
        numPages: 100,
        author: "Test Author",
        publisher: "Test Publisher",
      };

      const documentSaved = {
        ...data,
        _id: "1234567890abcdef",
        created_at: new Date(),
        updated_at: new Date(),
        __v: 0,
      };

      bookRepositoryMock.saveDocument.mockResolvedValue(documentSaved);
      const bookCreated = await bookService.createBook(data);

      expect(bookRepositoryMock.saveDocument).toHaveBeenCalledTimes(1);
      expect(bookRepositoryMock.saveDocument).toHaveBeenCalledWith(data);
      expect(bookCreated).toEqual(documentSaved);
    });
  });

  describe("BookService.updateBook", () => {
    it("Should call bookRepository.updateDocument", async () => {
      const bookMock = {
        _id: "67f27017fec686d04b5030cf",
        title: "Test Title 1",
        cover: "Test Cover 1",
        numPages: 100,
        created_at: "2025-04-06T12:14:15.930Z",
        updated_at: "2025-04-06T12:14:15.930Z",
        __v: 0,
      };

      const data = { title: "Title Updated" };

      bookRepositoryMock.getDocumentByIdAndUpdate = jest
        .fn(bookMock.id, data)
        .mockResolvedValue();
      await bookService.updateBook(bookMock.id, data);

      expect(bookRepositoryMock.getDocumentByIdAndUpdate).toHaveBeenCalledWith(
        bookMock.id,
        data,
      );
    });
  });

  describe("BookService.deleteBook", () => {
    it("Should call bookRepository.deleteDocument", async () => {
      const bookMock = {
        _id: "67f27017fec686d04b5030cf",
        title: "Test Title 1",
        cover: "Test Cover 1",
        numPages: 100,
        created_at: "2025-04-06T12:14:15.930Z",
        updated_at: "2025-04-06T12:14:15.930Z",
        __v: 0,
      };

      bookRepositoryMock.getDocumentByIdAndDelete = jest
        .fn(bookMock.id)
        .mockResolvedValue(bookMock);
      const bookDeleted = await bookService.deleteBook(bookMock.id);

      expect(bookRepositoryMock.getDocumentByIdAndDelete).toHaveBeenCalledWith(
        bookMock.id,
      );
      expect(bookDeleted).toEqual(bookMock);
    });
  });
});
