const express = require("express");
const bodyParser = require("body-parser");

const loginRouter = require("./routes/login");
const inboxRouter = require("./routes/inbox");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRouter);

app.use(inboxRouter);

app.use((req, res, next) => {
  res.status(404).send(`<h1>Page not found</h>`);
});

app.listen(3000);
