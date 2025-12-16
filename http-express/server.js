const express = require('express');

const app = express()
const PORT = 3000

app.get('/myhome',(req,res)=>{
    res.send('Hello from github')
});

app.listen(PORT,()=>{
    console.log('The app is running on port ' + PORT)
})

