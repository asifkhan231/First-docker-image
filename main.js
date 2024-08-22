const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    return res.json({message:"node js is running form container"})
})

const port = 4000;

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})