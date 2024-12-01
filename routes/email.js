const express = require('express');
const router = express.Router();

let emails = {}; // Simulating email storage

router.post('/send', (req, res) => {
  const { sender, recipient, subject, message } = req.body;

  if (!emails[recipient]) emails[recipient] = [];
  emails[recipient].push({ sender, subject, message, date: new Date() });
  
  res.status(200).send('Email sent successfully');
});

router.get('/inbox/:username', (req, res) => {
  const { username } = req.params;
  res.status(200).send(emails[username] || []);
});

module.exports = router;
