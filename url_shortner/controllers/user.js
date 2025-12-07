const { v4: uuidv4 } = require('uuid');
const User = require("../models/user");
const { setUser } = require('../service/auth')


async function handleSignup(req,res){
  const {name, email, password} = req.body;
  if(!email || !password){
    return res.status(400).json({
      error : "Email or password is missing"
    });
  }
  await User.create({
    name,
    email,
    password,
  })
  return res.render('home');
}

async function handleLogin(req,res){
  const {email, password} = req.body;
  const user = await User.findOne({email : email, password: password});
  if(!user) return res.render('login',{
    error: "Invalid Email or Password",
  })
  const token = setUser(user);
  res.cookie('uid', token);
  return res.redirect('/');
}

module.exports = {
  handleSignup, handleLogin
}