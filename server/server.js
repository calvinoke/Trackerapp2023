import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const PORT = 4000;

const app = express();

app.use(cors);

//connecting to mongodb atlas database
mongoose.set('strictQuery', false);
await mongoose.connect("mongodb+srv://Lomukisa:test@project12.ay1utfs.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log('Mongodb atlas connection is successful'))
//.catch((err) => console.error(err));

app.get("/", (req,res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:4000")
})