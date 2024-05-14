const https = require('https')


//server - createServer()

//position is important first argument should be request and second argument should be response
https.createServer((req,res)=>{
    res.write('hello world')
    res.end()
}).listen(4000,()=>{
    console.log('server listening to port 4000 and ready accept request');
})