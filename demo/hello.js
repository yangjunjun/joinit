const joinit = require('..');

const hostname = '127.0.0.1';
const port = 3000;

const app = joinit();

app.use(function (req, res, next) {
  req.test = "test";
  next();
});

app.use(function (req, res) {
  console.log(req.test);
  res.end('ok');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});