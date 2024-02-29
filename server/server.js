import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/plants.routes.js';
const app = express();
// middleware - functions that have access to the response and request objects
// cors allows server to accept requests from all origins
app.use(express.json(), cors());

// this makes it so all our routes start with /api
app.use("/api", router);


dotenv.config();
const PORT = process.env.PORT;


const DB_NAME = "plantstore"
dbConnect(DB_NAME);
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);
