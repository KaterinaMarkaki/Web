const express = require('express');
const favBooks = require('../../Books');
const router = express.Router();


//gets all book
router.get('/fav',(req, res) =>{
    res.json(favBooks);
});

//create book
router.post('/', (req, res) =>{
    const newBook = {
        id:req.body.id,
        name: req.body.name,
        author : req.body.author
    };
    favBooks.push(newBook);
    res.json(favBooks);
});

//update books id
router.put('/:id',(req, res) =>{
    const found = favBooks.some(favBook => favBook.id === parseInt(req.params.id));
    
    if(found){
        const updBook = req.body;
        favBooks.forEach(favBook => {
            if(favBook.id === parseInt(req.params.id)){
                favBook.name = updBook.name ? updBook.name : favBook.name;
                
                res.json({ msg: 'Member updated', favBook });
            }
        });
    } else {
        res.status(400).json({ msg:`No member with ${req.params.id}`});
    }

});

//delete book
router.delete('/:id',(req, res) =>{
    const found = favBooks.some(favBook => favBook.id === parseInt(req.params.id));
    
    if(found){
        res.json({ msg:'Book deleted', favBooks: 
        favBooks.filter(favBook => favBook.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({ msg:`No book with ${req.params.id}`});
    }

});

module.exports = router;