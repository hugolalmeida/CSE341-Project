const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/fruits');
const validation = require('../middleware/validate');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', validation.saveFruit, contactsController.createContact);

router.put('/:id', validation.saveFruit, contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;