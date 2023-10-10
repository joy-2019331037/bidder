import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import homeRoute from './routers/home.js';
import authRoute from './routers/auth.js';

const app = express();
const port = process.env.PORT || 8000;
dotenv.config()

//middleware
app.use(express.json());

//dbConnetion
mongoose.set("strictQuery", false);

const connectToMongo= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,  
        })

        console.log('MongoDB connnected')
    }catch(err){
        console.log('MongoDB not connected')
    }
}


app.get('/',homeRoute);
app.use("/api/auth",authRoute);


app.listen(port,()=>{
    connectToMongo();
    console.log("listening to port @",port);
})
