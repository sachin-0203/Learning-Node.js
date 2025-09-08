const express = require("express");
const user = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

// middleware
app.use(express.urlencoded({extended : false}));

app.use((req,res,next) =>{

  // res.setHeader('X-MyName', "Sachin");
  fs.appendFile('reqLog.txt', `\n${Date.now()}: ${req.method} -> ${req.path}`,
  (err, data) =>{
    next()
  })
})

// app.use((req,res,next) =>{
//   console.log("Hello from Middleware-2");
//   next();
// })

// ROUTE

app.get('/', (req,res)=>{
  res.end("Home");
})

app.get('/user', (req, res)=>{
  const html = `
    <ul>
      ${user.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
    </ul>
  `
  res.send(html);
})

app.get('/api/user', (req, res)=>{
  return res.json(user);
})

app.post('/api/user', (req,res)=>{
  const body = req.body;
  if(!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.language ){
    return res.status(400).json({msg: 'All fields are required'});
  }
  user.push({...body, id: user.length+1});
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(user), (err,data)=>{
    return res.status(201).json({ status : `user is created with id ${user.length}`});
  })
});

app.get('/api/user/:id', (req,res)=>{
  const id = Number(req.params.id);
  const data = user.find(user => user.id === id);
  if(!data) return res.status(404).json({ error: 'User not found '})
  return res.json(data);
})



app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))