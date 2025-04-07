const mongoose = require('mongoose');

class DataSource {
  connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
      console.log(error);
    }
  };

  emitEvents = () => {
    mongoose.connection.on('error', (error) => {
      console.log('Database connection failed', error);
    });
    mongoose.connection.once('open', () => {
      console.log('Database connection successful');
    });
    mongoose.connection.on('disconnected', () => {
      console.log('Database connection lost');
    });
  };
}

module.exports = DataSource;
