const express = require('express')
const { 
    getUsers, 
    createUser, 
    updateUser, 
    updateData,
    deleteUser
} = require( "../Controller/data.js");
const {
    validateGetParams,
    validateRole
} = require('../Middleware/validation');

const router = express.Router();

router.get('/users/:username/:id', validateGetParams, getUsers);
router.post('/create/:role', validateRole, createUser);
router.put('/updateUser/:role/:id', validateRole, updateUser);
router.patch('/updateData/:role/:id',validateRole, updateData);
router.delete('/delete/:role/:id', validateRole, deleteUser);


module.exports = router;