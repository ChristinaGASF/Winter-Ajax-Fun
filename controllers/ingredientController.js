const db = require('../models')

  module.exports = {
      index: (req, res) => {
        db.Ingredient.find({ })
          .exec( (err, ingreds) => {
            if (err) {
              res.status(500).send(err);
            }
            console.log('found and populated all foods: ', ingreds);
            res.json(ingreds);
          });
      },
      show : (req, res) => {
        let ingredientId = req.params.id;
        db.Ingredient.findOne({ _id: ingredientId }, (err, foundIngredient) => {
            if(err) { return console.log(err) }
            res.json(foundIngredient);
        });
      },
      create: (req,res) => {
        let newIngredient = req.body
          db.Ingredient.create(newIngredient, (err, newIngredient) => {
            if (err) { return console.log('ERROR', err); }
            console.log('created', newIngredient);
            res.json(newIngredient);
          });
      },
      update: (req, res) => {
        let ingredientId = req.params.id;
        let updateIngredient = req.body;
      
        db.Ingredient.findOneAndUpdate(
            { _id: ingredientId }, // search condition
            updateIngredient, // new content you want to update
            {new:true}, // you want to receive the new object
            (err, updateIngredient) => { // callback
            if(err) { return console.log(err) }
            res.json(updateIngredient);
        });
      },
      delete: (req, res) => {
        let ingredientId = req.params.id;
        db.Ingredient.deleteOne(
            { _id: ingredientId },
            (err, deletedIngredient) => {
                if(err) { return console.log(err) }
                res.json(deletedIngredient);
        });
      },
  }