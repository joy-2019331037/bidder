import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'

import homeRoute from './routers/home.js';
import authRoute from './routers/auth.js';
import currencyRoute from './routers/currencies.js';

const app = express();
const port = process.env.PORT || 8000;
const corsOptions={
    origin:true,
    credentials:true
}
dotenv.config()

//middleware
app.use(express.json());
app.use(cors(corsOptions))

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
app.use('/api/currencies',currencyRoute);


app.listen(port,()=>{
    connectToMongo();
    console.log("listening to port @",port);
})
