const mongoose = require('mongoose');
const schema= mongoose.Schema;

const DataSchema=schema({

    userid:String,
    title:String,
    body:String,
    status:String,
    comments:Boolean,
    imageURL:String
    
  


    
});


const Data = mongoose.model('Data',DataSchema);

module.exports= Data;