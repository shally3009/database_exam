const express = require('express');
const {connect} = require('mongoose');
const app = express();

const port = process.env.PORT || 3000;
const db_url = process.env.db_url;


require('dotenv').config({
    path: './src/config/.env'
});

app.listen(port, (req,res)=>{
    try{
        await connect(url)
        console.log(`Server is running on the port ${port}`);
    }
    catch(error){
        console.error(error);
    }
})

