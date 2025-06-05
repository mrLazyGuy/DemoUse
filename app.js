const express = require("express");
const cors = require("cors");
const { query } = require("winston");
const app = express();

app.use(express.json());
app.use(cors());

// === GET route ===
app.get("/health", (req, res) => {
    res.send(`hello ${(req, query.person)}`);
});

app.use("/api/books", require("./routes/books.route"));

module.exports = app;
