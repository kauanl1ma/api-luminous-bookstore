const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'The title of the book is required'],
    },
    cover: {
      type: String,
      required: [true, 'The cover of the book is required'],
    },
    numPages: {
      type: Number,
      required: [true, 'The number of pages of the book is required'],
      validate: {
        validator: (value) => {
          return value >= 10 && value <= 10000;
        },
        message: () => {
          return `The number of pages in the book must be between 10 and 10000`;
        },
      },
    },
    author: { type: String },
    publisher: { type: String },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

const Book = mongoose.model('Books', bookSchema);

module.exports = Book;
