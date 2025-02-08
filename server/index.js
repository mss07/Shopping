import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
import DefaultData from './default.js';
import Router from "./routes/route.js";

//express ka function banaya
const app=express();

dotenv.config();

app.use(cors()); 
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use('/',Router);

const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;

const PORT = 8000;

Connection(USERNAME,PASSWORD);
//server initialize command
app.listen(PORT,()=> console.log(`Server is runiing on port ${PORT} successfully `));

DefaultData();