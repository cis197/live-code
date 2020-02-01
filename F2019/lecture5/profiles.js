const router = require('express').Router();

router.get('/profile', (req, res) => {
  res.send('profile');
});

module.exports = router;
