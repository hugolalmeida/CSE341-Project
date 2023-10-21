const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/characters');
const validation = require('../middleware/validate');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', validation.saveCharacter, contactsController.createContact);

router.put('/:id', validation.saveCharacter, contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
