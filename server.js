const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Import the dotenv package
require('dotenv').config()

//routes

app.get('/', function (req, res) {
  res.send('Hello Neo, follow the white rabbit...')
})

app.get('/blog', (req, res) => {
    res.send("Hello blog my name is Neo")
})


//access environment mongod pw
const mongoKey = process.env.MON_KEY;

// Connect to mongoDB
mongoose
  .connect(mongoKey, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(3000, () => {
        console.log(`Node API is running on port 3000`)
    })
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

//   mongoose.connect(mongodKey)
//   .then(() => console.log('Connected!'));
//create an import for the connection string since it 
// will have ykkou code and have it wired to the .env file 
// so that it can't view on github

//walking dogs