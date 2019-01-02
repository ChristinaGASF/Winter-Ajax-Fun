// require express and other modules
const 
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./models'),
    ctrl = require('./controllers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/*
 * HTML Endpoints
 */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * Response Endpoints
 */

// Index foods //
app.get('/api/foods/', ctrl.food.index);

// Get one Food //
app.get('/api/foods/:id', ctrl.food.show);

// Create a food //
app.post('/api/foods', ctrl.food.create);

// update Food
app.put('/api/foods/:id', ctrl.food.create);

// delete food //
app.delete('/api/foods/:id', ctrl.food.delete);

// Index ingredients //
app.get('/api/ingredients/', ctrl.ingredient.index);

// Get One Ingredient //
app.get('/api/ingredients/:id', ctrl.ingredient.show);
// Create Ingredient //
app.post('/api/ingredients', ctrl.ingredient.create);

// update Ingredient
app.put('/api/ingredients/:id', ctrl.ingredient.update);

// delete ingredient //
app.delete('/api/ingredients/:id', ctrl.ingredient.delete);

//Run server and run on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});