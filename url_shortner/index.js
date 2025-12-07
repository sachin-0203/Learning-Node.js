const express  = require("express")
const path = require('path')
const cookieParser = require("cookie-parser");
const { connectMongoDb } = require('./connect')
const { restritedToLoggedInUserOnly, checkAuth } = require('./middleware/auth')

// models
const URL = require('./models/url')

// routes
const urlRoute = require('./routes/url')
const userRoute = require('./routes/user')
const staticRouter = require('./routes/staticRouter')

// controllers

const app = express();
const PORT = 8005;

// connectBackend
connectMongoDb('mongodb://localhost:27017/short-url').then(()=> console.log("Mongodb connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/url', restritedToLoggedInUserOnly, urlRoute);
app.use('/', checkAuth, staticRouter);
app.use('/user', userRoute);

app.get('/url/:shortId', async (req,res) => {
  const shortId  = req.params.shortId;
  if(!shortId) return res.status(400).json({"error":"Short URL not found"})
  const entry = await URL.findOneAndUpdate({
    shortId
  },{
    $push: {
      visitHistory : {
        timestamps : Date.now()}
    }
  });
  console.log(entry);
  res.redirect(entry.redirectURL);

})

app.listen(PORT, ()=> console.log(`Server Started at PORT: ${PORT}`))
