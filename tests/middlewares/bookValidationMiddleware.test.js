const bookValidationMiddleware = require("../../src/middlewares/bookValidationMiddleware");

describe("bookValidationMiddleware", () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      body: {
        title: "Test Title",
        cover: "Test Cover",
        numPages: 100,
        author: "Test Author",
        publisher: "Test Publisher",
      },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each([
    { field: "title", value: "", message: "The title of book is required" },
    { field: "cover", value: "", message: "The cover of book is required" },
    {
      field: "numPages",
      value: null,
      message: "The numPages of book is required",
    },
  ])(
    "Should return statusCode 400 and a message if the $field is missing",
    ({ field, value, message }) => {
      req.body[field] = value;

      bookValidationMiddleware(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message });
    },
  );

  it("Should return statusCode 400 and a message if the numPages is not beetween 10 and 10000", () => {
    req.body.numPages = 5;

    bookValidationMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "The number of pages must be between 10 and 1000",
    });
  });

  it("Should call next function on success", () => {
    bookValidationMiddleware(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
  });
});
