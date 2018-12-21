require('dotenv').config();
const express = require('express');
const massive = require('massive');


const app = express();

app.use(express.json());


const {CONNECTION_STRING} = process.env;
const PORT = process.env.PORT



app.get(`/api/properties`,(req,res)=>{const db = req.app.get('db');
db.getAllHouses().then(res=>{
    res.status(200).send(res)
}).catch(err=>{console.log(err)})
})



massive(CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
    app.listen(PORT, ()=>{console.log(`it works???? listening on port ${PORT}`)})
}).catch(err=>{console.log(err)})