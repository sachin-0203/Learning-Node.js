// const fs = require('fs');
const express = require('express') 

const http = require("http");

// Methode - 1 (using node.js)

// function handler(req, res){
//   const log = `${Date.now()}- ${req.url}: new request received\n`
//   fs.appendFile("log.txt", log, (err,data) =>{
//     switch(req.url){
//       case '/':
//         res.end("Home Page")
//         break;
//       case '/about':
//         res.end("This is Sachin")
//         break;
//       case '/signup':
//         if(req.method === "GET") 
//              res.end("This is a signup form");
//         else if(req.method === "POST"){
//           // dp query
//           res.end("Success")
//         }

//       default:
//         res.end("LOL")

//     }
//   })
// }

// const myServer = http.createServer(handler);
// myServer.listen(8000, ()=> console.log("Server Started"));


// Methode - 2 (using express)

const app = express();

app.get('/', (req,res)=>{
  return res.send("Welocome! This is Home Page");
})

app.get('/about', (req,res)=>{
  return res.send(`Hey! ${req.query.name} \n This is About Page  `);
})

app.listen(8000, () => console.log("Server Started!"));

