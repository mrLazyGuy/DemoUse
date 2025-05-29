
const router =  require('express').Router()
const books = require('../book.json')
router.get('/',(req,res)=>{
res.send(books)

})


router.post('/',(req,res)=>{
const data = req.body
books.push(data)

})

module.exports = router
