let assert = require('assert');
let request = require('supertest');
let joinit = require('..');

describe('joinit:route', function(){


  it.skip('should wrap in an http.Server', function(done){
    let app = joinit();

    app.use('/', function(req, res){
      res.end('index');
    });

    app.use('/test', function(req, res){
      res.end('test');
    });

    request(app)
      .get('/test')
      .expect(200, "test", done);
  });

})