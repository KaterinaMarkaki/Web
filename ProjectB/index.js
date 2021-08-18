const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
//const logger = require('./middleware/logger');
//const members = require('./Members');
const books = require('./Books');

const app = express();
const myRouter = require('./routes/api/books');
const favBooks = require('./Books');

//init middleware
//app.use(logger);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/books', (req ,res) =>{
    res.json(books);
});
app.get('/fav', (req ,res) =>{
    res.json(favBooks);
});

app.post('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



// Set static folder
app.use(express.static(path.join(__dirname, './public/')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
}) ;
// serve index.html as content root
app.get('/', function(req, res){

    var options = {
        root: path.join(__dirname, 'public')
    }

    res.sendFile('index.html', options, function(err){
        console.log(err)
    })
});

// Fav Route
app.get('/fav', (req, res) =>
  res.render('favBooks.html', {
    
    favBooks
  })
);
/*
//homepage
app.get('/', (req, res) => res.render('home',{
    
}));
// Homepage Route
app.get('/', (req, res) =>
  res.render('home', {
  })
);*/

app.use('/api/books', require('./routes/api/books'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
