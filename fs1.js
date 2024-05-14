const fs = require('fs')


const getFileData =()=>{
    fs.readFile('./text.txt','utf-8',(err, data)=>{
       if(err) throw err
       console.log(data);
    })
}

getFileData()