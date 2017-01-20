# joinit

 joinit is a node HTTP server framework just like [connect](https://github.com/senchalabs/connect).

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

```
const joinit = require('joinit');
const app = joinit();

app.use(function (req, res) {
  res.end('ok');
});

app.listen(3000);
```



[npm-image]: https://img.shields.io/npm/v/joinit.svg
[npm-url]: https://npmjs.org/package/joinit
[travis-image]: https://img.shields.io/travis/yangjunjun/joinit.svg
[travis-url]: https://travis-ci.org/yangjunjun/joinit/