const User = require("../models/user");

async function handleGetAllUser(req, res) {
  const allDbUser = await User.find({});
  return res.json(allDbUser);
}

async function handleGetUserById(req,res) {
  const data = await User.findById(req.params.id);
  if(!data) return res.status(404).json({ error: 'User not found '});
  return res.json(data);
}

async function handleUpdateUserById(req,res) {
  const user =   await User.findByIdAndUpdate(req.params.id , { lastName : "Updated",});
  if(user)
    return res.json({ msg : "user information updated"});
  else
    return res.status(404).json({ msg : "user not found"})
}

async function handleDeleteUserById(req,res) {
  const user = await User.findByIdAndDelete(req.params.id);
  if( user )
    return res.json({ msg: "user deleted successfully" });
  else 
    return res.status(404).json({ msg : "user not found" })
}

async function handleCreateUser(req,res) {
  const body = req.body;
  if(!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.language ){
    return res.status(400).json({msg: 'All fields are required'});
  }

  const result = await User.create({
    firstName : body.first_name,
    lastName: body.last_name,
    gender: body.gender,
    email: body.email,
    language: body.language,
  })
  return res.status(201).json({
    msg: "success",
    id : result._id,
  })
}

module.exports = {
  handleCreateUser,
  handleGetAllUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
}