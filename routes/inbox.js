const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  let msg = fs.readFileSync("./messages.txt", "utf-8");
  if (msg === "") {
    msg = "Let's chat";
  }
  res.send(
    `<form action='/' method='POST' onsubmit=document.getElementById('username').value=localStorage.getItem('username')>
    <p>${msg}</p>
    <input type='text' name='message'/>
    <input type='hidden' name='username' id='username'/>
    <button type='submit'>Send</button></form>`
  );
});

router.post("/", (req, res, next) => {
  fs.appendFile(
    "./messages.txt",
    ` ${req.body.username}: ${req.body.message}`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  res.redirect("/");
});

module.exports = router;
