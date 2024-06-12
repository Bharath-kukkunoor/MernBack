const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    path: String,
    size: Number,
    uploaded_at: { type: Date, default: Date.now }
  });
  

 const Upload=mongoose.model("Upload", fileSchema)

 module.exports=Upload;
