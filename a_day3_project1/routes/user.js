const express = require("express");
const { handleCreateUser, handleGetAllUser, handleGetUserById, handleUpdateUserById, handleDeleteUserById  } = require("../controllers/user")

const router = express.Router();

router.route('/').get(handleGetAllUser).post(handleCreateUser);

router.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);


module.exports = router