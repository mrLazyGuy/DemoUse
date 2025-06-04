const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// === GET route ===
app.get('/health', (req, res) => {
  res.send({message:'healthy route'});
});

app.use('/api/books' , require('./routes/books.route'))


module.exports = app;
