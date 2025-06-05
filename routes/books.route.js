const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const booksPath = path.join(__dirname, "../book.json");

const books = require("../book.json");

console.log(booksPath);
const { check, validationResult } = require("express-validator");

router.get("/", (req, res) => {
    res.send(books);
});
const validtaorMiddleWare = [
    check("name", "book name is required").not().isEmpty(),
    check("author", "author name is required").not().isEmpty(),
];

router.post(
    "/",

    validtaorMiddleWare,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        books.push(req.body);
        // Write the updated array to book.json

        async function saveIntoBooksArray() {
            try {
                fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
                res.status(200).json(req.body);
            } catch (err) {
                if (err instanceof Error) {
                    console.log("errror is", err);
                } else {
                    console.log("unknown error");
                }
            }
        }

        saveIntoBooksArray();
    },
);

module.exports = router;
