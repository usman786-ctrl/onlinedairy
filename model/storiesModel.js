const mongoose = require('mongoose');
const schema= mongoose.Schema;

const DataSchema=schema({

    userid:String,
    userName:String,
    title:String,
    body:String,
    status:String,
    comments:Boolean,
  


    
});


const Data = mongoose.model('Data',DataSchema);

module.exports= Data;