const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(`
      <form  onsubmit="localStorage.setItem('username', document.getElementById('userName').value)"  action="/login" method="POST">
      <label for="userName">Username:</label>
                  <input id="userName" type="text" name="username" />
                  <button type="submit">Login</button>
    `);
});

router.post("/login", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
