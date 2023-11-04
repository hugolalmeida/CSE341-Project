const express = require('express');
const router = express.Router();
const { auth, requiresAuth } = require('express-openid-connect');
const contactsController = require('../controllers/user');
const validation = require('../middleware/validate');

router.get('/', requiresAuth(), contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', validation.saveUser, contactsController.createContact);

router.put('/:id', validation.saveUser, contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;