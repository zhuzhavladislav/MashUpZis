const express = require('express');
const mongoose = require('mongoose');

const multer = require("multer");
const fs = require("fs");

const app = express();

const server = require("http").createServer(app);
const port = process.env.PORT || 5000;

app.use(express.json({extended:true}))
app.use('/api/track', require('./routes/api/track.route'))

// cors
const cors = require("cors");
app.use(cors());

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));


// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

async function start() {
    try{
        await mongoose.connect('mongodb+srv://admin:213443@cluster0.hekf0.mongodb.net/dbmashup?retryWrites=true&w=majority')
        server.listen(port, ()=>console.log(`Server started on port ${port}`))
    } catch (err) {console.error(err)}
}

app.get('/api', (req, res) =>{
    res.json({message: "Hello from backend express.js"})
})
start()

