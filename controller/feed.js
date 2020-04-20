const mongoose = require('mongoose');
const todoitems = require('../models/tofoitem')

mongoose.connect('mongodb+srv://test:11981997@cluster0-dk66t.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection; 
db.on('error', function (){ console.log("Erreur lors de la connexion"); }); 
db.once('open', function (){ console.log("Connexion à la base OK"); });

this.todoitems = mongoose.model('todoitems', todoitems)

exports.getPosts = (req, res, next) => {
  this.todoitems.find().then(user => {
    res.status(200).json({
      user: user
    })
  })
}


exports.createPost = (req, res, next) => {
  const todomodel = this.todoitems(req.body)
  // Create post in db
  todomodel.save().then(group => {
    res.status(200).json(group || {})
  }).catch(err => {
    res.status(500).json({
      code: 500,
      message: err
    })
  })
}

exports.getOne = (req, res, next) => {
  this.todoitems.findById(req.params.id).then(user => {
    res.status(200).json({
      user: user
    })
  })
}

exports.updateOne = (req, res, next) => {
  try {
    this.todoitems.findByIdAndUpdate(req.params.id, {name: req.body.name, status: req.body.status}, { "new": true}).then(update => {
      res.status(200).json({
        user: update
      })
    })
  } catch (err) {
    res.status(500).json({
      code: 500,
      message: err
    })
  }
}

exports.deleteOne = (req, res, next) => {
  try {
    this.todoitems.findByIdAndRemove(req.params.id).then(update => {
      res.status(200).json({
        user: update
      })
    })
  } catch (err) {
    res.status(500).json({
      code: 500,
      message: err
    })
  }
}
