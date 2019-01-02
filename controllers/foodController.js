const db = require('../models')

  module.exports = {
      index: (req, res) => {
        db.Food.find({ })
          .populate('ingredients')
          .exec((err, foods) => {
            if (err) {
              res.status(500).send(err);
            }
            console.log('found and populated all foods: ', foods);
            res.json(foods);
          });
      },
      show: (req, res) => {
        let foodId = req.params.id;
        db.Food.findOne({ _id: foodId })
        .exec((err, foundFood) => {
          if(err) { return console.log(err) }
          res.json(foundFood);
      })
      },
      create: (req,res) => {
        let newFood = req.body
        console.log(req.body)
          db.Food.create(newFood, (err, newFood) => {
            if (err) { return console.log('ERROR', err); }
            console.log('created', newFood);
            res.json(newFood);
          });
      },
      update: (req, res) => {
        let foodId = req.params.id;
        let updateFood = req.body;
      
        db.Food.findOneAndUpdate(
            { _id: foodId }, // search condition
            updateFood, // new content you want to update
            {new:true}, // you want to receive the new object
            (err, updatedFood) => { // callback
            if(err) { return console.log(err) }
            res.json(updatedFood);
        });
      },
      delete: (req, res) => {
        let foodId = req.params.id;
        db.Food.deleteOne(
            { _id: foodId },
            (err, deletedFood) => {
                if(err) { return console.log(err) }
                res.json(deletedFood);
        });
      },
  }