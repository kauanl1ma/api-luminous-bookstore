const express = require('express');

const booksRoute = require('./booksRoute');

class Routes {
  constructor(app) {
    this.app = app;
    this.router = express.Router();
  }

  init() {
    booksRoute(this.router);
  }

  useRoutes() {
    this.app.use('/api', this.router);
  }
}

module.exports = Routes;
