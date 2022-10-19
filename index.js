import express from 'express';

import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("server up and running.....")
})

app.listen(PORT,()=>{
    console.log("Server up and running...")
})


app.post('/',(req,res)=>{
    console.log(req.body);
})