const express = require("express");
const { connectMongoDb } = require("./connections")

const { logReqRes } = require('./middleware');

const userRouter = require('./routes/user');

const app = express();
const PORT = 8000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/my-app").then(()=>{
  console.log("MongoDb Connected!");
});

// middleware
app.use(express.urlencoded({extended : false}));
app.use(logReqRes("reqLog.txt"));

// ROUTE
app.use('/api/user', userRouter);

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))