const express = require('express');
const router = express.Router();
const db = require('../../database/models');
const User = db.User;

router.get('/check-user', async (req, res) => {
  const user = req.query.user;

const existingUser = await User.findOne({
    where: {
      userName: user,
    },
  });

  if (existingUser) {
    res.json({ exists: true });
  } else {
    res.json({ exists: false });
  }
});

router.get('/check-email', async (req, res) => {
    const email = req.query.email;
  
    const existingUser = await User.findOne({
      where: {
        email: email,
      },
    });
  
    if (existingUser) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  });

module.exports = router;