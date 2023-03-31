const router = require('express').Router()
const UserCtrl = require('../controllers/usersController')
const verifyToken = require('../middlewares/verifyToken')
const hasPrivileges = require('../middlewares/hasPrivileges')
const isAdmin = require('../middlewares/isAdmin')

router.post('/users', verifyToken, hasPrivileges, UserCtrl.apiAddUser) // CRUD: (C) Create
router.get('/users', verifyToken, UserCtrl.apiGetUserById) // CRUD: (R) Retrieve
router.put('/users/', verifyToken, UserCtrl.apiUpdateUser) // CRUD: (U) Update
router.delete('/users/:id', verifyToken, UserCtrl.apiDeleteUser) // CRUD: (D) Delete
router.get('/users/admin', verifyToken, isAdmin, UserCtrl.apiGetAllUsers) // Requiere admin privileges

module.exports = router
