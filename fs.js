//import fs modules
const fs = require('fs')

//wite a content to a file in the system

fs.writeFile('./text.txt','hello world',(err)=>{
     if(err) throw err;
     console.log('data written to the file');
})