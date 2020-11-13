const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB || 'mongodb://localhost/mernleozon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
