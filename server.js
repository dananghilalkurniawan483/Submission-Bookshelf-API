const express = require('express');
const bodyParser = require('body-parser');
const booksRoute = require('../routes/books');

const app = express();
const PORT = 9000;

app.use(bodyParser.json());

app.use('/books', booksRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
