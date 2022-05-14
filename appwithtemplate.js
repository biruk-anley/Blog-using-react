const express = require('express');

const app = express();  // invoking

// here is how to register view engine
app.set('view engine','ejs');
app.set('views', 'views');

// listen

app.listen(3000);

// handeling requestis and responses

app.get('/', (req,res)=>{
   //sending or rendering dynamic data with template
   res.render('index')
   
});

app.get('/about', (req,res)=>{
  res.render('about')
});

app.get('/about-me',(req,res)=>{
   res.redirect('/about')
});

//404 using use method
// use method express that always use this request handler os we need to make it down below
app.use((req,res)=>{
   res.status(404).render('404')
})