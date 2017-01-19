const http = require('http');

function createServer() {
  function app(req, res, next) {
    app.handle(req, res, next);
  }
  app.stack = [];

  app.use = function (route, fn) {
    let path = route;
    let handle = fn;

    // default route to '/'
    if (typeof path !== "string") {
      handle = route;
      path = "/";
    }

    app.stack.push({
      route: path,
      handle: handle
    })
  }
  app.handle = function (req, res, next) {
    let index = 0;

    function next() {
      let layer = app.stack[index++];
      if (!layer) {
        console.log('next end');
        return;
      }
      layer.handle(req, res, next)
    }
    next();
  }
  app.listen = function () {
    let server = http.createServer(this);
    return server.listen.apply(server, arguments);
  }  
  return app;
}

module.exports = createServer;
