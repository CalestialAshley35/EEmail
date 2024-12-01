const express = require('express');
const router = express.Router();

const users = {}; // Simulating a user database

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users[username]) {
    return res.status(400).send('User already exists');
  }
  users[username] = { password };
  res.status(201).send('Registered successfully');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username].password === password) {
    return res.status(200).send({ token: `auth-${Date.now()}` }); // Simple token
  }
  res.status(401).send('Invalid credentials');
});

module.exports = router;
