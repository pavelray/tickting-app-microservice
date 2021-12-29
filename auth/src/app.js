const express = require('express');
const {json} = require('body-parser');

const PORT = 3000;

const app = express();

app.use(json());

app.get('/api/users/currentUser', (req,res,next)=>{
    res.status(200).send({
        data:{
            message: 'Hi There'
        }
    });
});

app.listen(PORT, ()=> {
    console.log(`App listing on Port:${PORT}`)
});
