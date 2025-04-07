const express = require('express');
const Routes = require('./routes/index');

class ExpressApp {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.initializeRoutes();
  }

  initializeRoutes() {
    const routes = new Routes(this.app);
    routes.init();
    routes.useRoutes();
  }

  listen(port) {
    this.app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }
}

module.exports = ExpressApp;
