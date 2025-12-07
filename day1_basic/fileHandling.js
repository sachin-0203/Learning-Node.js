const fs = require("fs");
const os = require("os");


// ........Create a FILE

//  1 Sync -> (path, string)
// fs.writeFileSync("./text.txt", "Hello Sachin")

// 2 Async 
// fs.writeFile("./text2.txt", "Hello file Asyn..", (err)=>{})


//....... READ FILE

// 1 sync
// const result= fs.readFileSync('./readfile.txt', 'utf-8')
// console.log(result);

// 2. async
// fs.readFile('./readfile.txt', 'utf-8', (err, result) => {
//   if (err){
//     console.log("Error",err);
//   }
//   else{
//     console.log(result);
//   }
// })


// append file - write data
// sync , async

// fs.appendFileSync("./text.txt", `\nNew Line`)


// copy any file
// function ('original path' , 'copy path' )
// fs.copyFileSync("./text.txt", "./copyfile.txt")

// fs.copyFile("./text.txt", "./copyfileSync.txt", (err)=>{
//   if(err){
//     console.error("Error", err);
//   }
//   else{
//     console.log("File Copy success")
//   }
// })


// DELETE - path
// fs.unlinkSync("./copyfileSync.txt");

// STATS of any file
// console.log(fs.statSync('./index.js'))


// Demonstartion of Blocking and Non-Blocking Operation----------------

// console.log('1');

// Blocking Operation....
// const resp = fs.readFileSync('readfile.txt', 'utf-8');

// Non Blocking Operation...
// fs.readFile('readfile.txt', 'utf-8', (err,res) => {
//   console.log(res);
// })

// console.log('2');
// console.log('3');
// console.log('4');

console.log(os.cpus().length);