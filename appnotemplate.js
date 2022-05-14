 const express = require('express');

 const app = express();  // invoking

 // listen

 app.listen(3000);

 // handeling requestis and responses

app.get('/', (req,res)=>{
    // res.send('<p>home page</>')
    res.sendFile('./html/index.html', {root:__dirname})
});

app.get('/about', (req,res)=>{
    res.sendFile('./html/about.html', {root:__dirname})
});

app.get('/about-me',(req,res)=>{
    res.redirect('/about')
});

//404 using use method
// use method express that always use this request handler os we need to make it down below
app.use((req,res)=>{
    res.status(404).sendFile('./html/404NotFound.html', {root:__dirname})
})