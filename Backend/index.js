const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute=require('./Routes/product.route.js')
const uploadRoute = require('./Routes/upload.route.js');
const cors=require("cors");

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());
//routes
app.use("/api/products", productRoute);
app.use("/upload", uploadRoute);


app.get("/", (req, res) => {
  res.send("hello Al!!");
});


mongoose.connect("mongodb+srv://bharathkukkunoor:TD0uo00smlplD23G@mymongodb.xtybdhe.mongodb.net/Node-api?retryWrites=true&w=majority&appName=Mymongodb")

  .then(() => {
    console.log("connected to database");
    app.listen(5555, () => {
      console.log("running in 5555");
    });
  })
  .catch(() => {
    console.log("disconnected");
  });
