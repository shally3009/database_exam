const express = require('express');
const {connectDB} = async (url)=>{
    try{
        await connect(url)
        console.log(`Server is running on the port ${port}`);
    }
    catch(error){
        console.error('Error connecting to the database');
        console.error(error);
}
}
module.exports = connectDB;