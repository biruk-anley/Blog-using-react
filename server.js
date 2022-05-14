const http=require('http');
const fs=require('fs');
const _=require('lodash')

//create a server
const server = http.createServer((req, res)=>{
    // lodash

    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(()=>{
        console.log('hellow')
    });
    greet();
    greet();

    //set the header-content
    res.setHeader('content-type','text/html');

    // routing page
    let path = './html/';
    switch(req.url){
        case '/':
            path +='index.html';
            res.statusCode=200;
            break;
        case 'about':
            path +='about.html';
            res.statusCode=200;

            break;
        default:
            path+='404NotFound.html';
            res.statusCode = 404;
            break;
      
            
    }
    //lets use file system

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
           
            res.end(data)
        }
    })

})

// lets use server and invoke listen method

server.listen(3000,'localhost',()=>{
    console.log('listening a request')
})