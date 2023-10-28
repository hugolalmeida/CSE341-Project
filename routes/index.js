const express = require('express');
const router = express.Router();
const { auth, requiresAuth } = require('express-openid-connect');

router.use('/', require('./swagger'));
router.use('/characters', require('./characters'));
router.use('/akumanomi', require('./fruits'));
router.use('/user', require('./user'));

// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });
  
router.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  })

module.exports = router;
