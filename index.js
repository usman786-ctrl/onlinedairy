const mongoose = require('mongoose');
const express= require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
const StoryData = require('./model/storiesModel');


app.use(cors({origin: true}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const uri ="mongodb+srv://test:test@cluster0.tcsdw.mongodb.net/<usman>?retryWrites=true&w=majority"
mongoose
     .connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));


app.post('/api/v1/dashbordstories',(req,res)=>{

    const userID= req.body.userid;
    
    
    StoryData.find({userid:userID}).then((result)=>{
        if(result){
            res.send(result);

        }else{
        res.send('no story found for '+token);


        }
    })

});



app.post('/api/v1/createstroy',async (req,res)=>{


   const newStory= await new StoryData(req.body).save();
   res.send(newStory);
   

});





app.post('/api/v1/update',async (req,res)=>{


    const {id,title,status,comments,body}= req.body;
 
   const result=await StoryData.findByIdAndUpdate({_id:id},{title,body,status,comments},{new: true});

    
 
 });


 app.post('/api/v1/delete',async (req,res)=>{

    const {id,userid}= req.body;
 
   const result=await StoryData.findByIdAndDelete({_id:id});

   StoryData.find({userid:userid}).then((result)=>{
    if(result){
        res.send(result);

    }else{


    }
})

    
 
 });






app.get('/api/v1/public',(req,res)=>{


   StoryData.find({status: "public"}).then((result)=>{
       res.send(result);
   })

    

})

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  const PORT = process.env.PORT ||5000;
  app.listen(PORT,()=> console.log(PORT));