const BookService = require("../../src/services/BookService");
const BookController = require("../../src/controllers/BookController");

jest.mock("../../src/services/BookService");

describe("BookController", () => {
  let bookServiceMock;
  let bookController;

  beforeEach(() => {
    bookServiceMock = new BookService();
    bookController = new BookController(bookServiceMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("BookController.getBooks", () => {
    it("Should return statusCode 200 and books", async () => {
      const req = {
        body: {},
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const books = [];

      bookServiceMock.getBooks = jest.fn().mockResolvedValue(books);
      await bookController.getBooks(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(books);
    });
  });

  describe("BookController.getBook", () => {
    it("Should return statusCode 200 and bookFound", async () => {
      const req = {
        params: {
          id: "67f27017fec686d04b5030cf",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const bookFound = {
        _id: "67f27017fec686d04b5030cf",
        title: "Test Title 1",
        cover: "Test Cover 2",
        numPages: 100,
        created_at: "2025-04-06T12:14:15.930Z",
        updated_at: "2025-04-06T12:14:15.930Z",
        __v: 0,
      };

      bookServiceMock.getBook = jest
        .fn(req.params.id)
        .mockResolvedValue(bookFound);
      await bookController.getBook(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(bookFound);
    });
  });

  describe("BookController.createBook", () => {
    it("Should return statusCode 201, a message and bookCreated", async () => {
      const req = {
        body: {
          title: "Test Title",
          cover: "Test Cover",
          numPages: 100,
          author: "Test Author",
          publisher: "Test Publisher",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const bookCreated = {
        ...req.body,
        _id: "1234567890abcdef",
        created_at: new Date(),
        updated_at: new Date(),
        __v: 0,
      };

      bookServiceMock.createBook = jest.fn().mockResolvedValue(bookCreated);
      await bookController.createBook(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "New book created successfully",
        data: bookCreated,
      });
    });
  });

  describe("BookController.updateBook", () => {
    it("Should return statusCode 200 and a success message", async () => {
      const req = {
        params: {
          id: "67f27017fec686d04b5030cf",
        },
        body: {
          title: "Title Updated",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const { id } = req.params;
      const data = req.body;

      bookServiceMock.updateBook = jest.fn(id, data).mockResolvedValue();
      await bookController.updateBook(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: "Book updated successfully",
      });
    });
  });

  describe("BookController.deleteBook", () => {
    it("Should return statusCode 200, a message and bookDeleted", async () => {
      const req = {
        params: {
          id: "67f27017fec686d04b5030cf",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const bookDeleted = {
        _id: "67f27017fec686d04b5030cf",
        title: "Test Title 1",
        cover: "Test Cover 2",
        numPages: 100,
        created_at: "2025-04-06T12:14:15.930Z",
        updated_at: "2025-04-06T12:14:15.930Z",
        __v: 0,
      };

      const { id } = req.params;

      bookServiceMock.deleteBook = jest.fn(id).mockResolvedValue(bookDeleted);
      await bookController.deleteBook(req, res);

      expect(bookServiceMock.deleteBook).toHaveBeenCalledWith(id);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: "Book deleted successfully",
        data: bookDeleted,
      });
    });
  });
});
