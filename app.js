const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const feedRoutes = require('./routes/feed')

const app = express()
app.use(bodyParser.json()) // content-type: application/json
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
});
 
const uri = "mongodb+srv://test:Argenton123@cluster0-dk66t.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true  });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use('/feed', feedRoutes)
app.listen(8080)