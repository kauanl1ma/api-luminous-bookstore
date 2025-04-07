require('dotenv').config();

const ExpressApp = require('./src/app');
const DataSource = require('./src/dataSource/dataSource');

const expressApp = new ExpressApp();
const PORT = process.env.PORT || 3000;
expressApp.listen(PORT);

const dataSource = new DataSource();
dataSource.connect();
dataSource.emitEvents();
