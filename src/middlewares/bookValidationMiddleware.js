const bookValidationMiddleware = (req, res, next) => {
  try {
    const { title, cover, numPages, author, publisher } = req.body;

    const data = { title, cover, numPages, author, publisher };

    if (!data.title) throw new Error('The title of book is required');

    if (!data.cover) throw new Error('The cover of book is required');

    if (!data.numPages) throw new Error('The numPages of book is required');

    if (data.numPages < 10 || data.numPages > 1000)
      throw new Error('The number of pages must be between 10 and 1000');

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = bookValidationMiddleware;
