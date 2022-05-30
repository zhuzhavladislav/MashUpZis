const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({extended:true}))
app.use('/api/track', require('./routes/api/track.route'))

async function start() {
    try{
        await mongoose.connect('mongodb+srv://admin:213443@cluster0.hekf0.mongodb.net/dbmashup?retryWrites=true&w=majority')
        app.listen(port, ()=>console.log(`Server started on port ${port}`))
    } catch (err) {console.error(err)}
}

app.get('/api', (req, res) =>{
    res.json({message: "Hello from backend express.js"})
})
start()

