let assert = require('assert');
let request = require('supertest');
let http = require('http');

let joinit = require('..');

describe('joinit', function(){

  beforeEach(function(){
    // let app = joinit();
  })

  it('should wrap in an http.Server', function(done){
    let app = joinit();

    app.use(function(req, res){
      res.end();
    });

    request(app)
      .get('/')
      .expect(200, done);
  });


  it('should work in http.createServer', function(done){
    let app = joinit();
    app.use(function (req, res) {
      res.end('helloworld');
    });

    let server = http.createServer(app);

    request(server)
    .get('/')   
    .expect(200, done);
  })

  it('should be a callable function', function(done){
    let app = joinit();

    app.use(function (req, res) {
      res.end('joinit');
    });

    function handler(req, res) {
      res.write('hello ');
      app(req, res);
    }

    let server = http.createServer(handler);

    request(server)
    .get('/')   
    .expect(200, "hello joinit", done);
  })

  it('中间件', function(done){
    let app = joinit();

    app.use(function(req, res, next){
      res.write("hello ");
      next();
    });

    app.use(function(req, res){
      res.end("joinit");
    });

    request(app)
      .get('/')
      .expect(200, "hello joinit", done);
  });

})