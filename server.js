require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const Flight = require('./models/Flight')
const app = express();
const PORT = process.env.PORT || 8080

const test = {
    airline: 'American',
    flightNo: 11,
}

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

Flight.create(test, (e, data) => {
    if (e) console.log(e);    
    console.log(data);
})


// app.listen(PORT, () => {
    console.log(`server up`);
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
        app.listen(PORT, () => console.log(`Server up`))
    })
// })