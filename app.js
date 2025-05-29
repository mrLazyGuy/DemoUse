const express = require('express');
const cors = require('cors');
const bookRoute = require('./routes/books.route') 

const app = express();

app.use(express.json());
app.use(cors());

// === GET route ===
app.get('/', (req, res) => {
  res.send('hello');
});


app.use('/api/books' , bookRoute)


module.exports = app;
