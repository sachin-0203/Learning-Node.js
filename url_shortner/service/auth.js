const jwt = require("jsonwebtoken");
const secret = "your1secret2key3$$"
const serviceIdToUserMap = new Map();

function setUser(user){
  // serviceIdToUserMap.set(id,user);
  return jwt.sign(
    {
      _id : user._id,
      email : user.email,
    },
    secret
  );
}

function getUser(token){
  // return serviceIdToUserMap.get(id);
  if(!token) return null;
  try{
    return jwt.verify(token,secret);
  } catch(error){
    return null;
  }
}


module.exports = {
  setUser, 
  getUser
};
