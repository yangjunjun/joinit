var assert = require('assert');

describe('mocha: hooks', function() {

  // before(function() {
  //   console.log('before');
  //   // runs before all tests in this block
  // });

  // after(function() {
  //   console.log('after');
  //   // runs after all tests in this block
  // });

  // beforeEach(function() {
  //   console.log('beforeEach');
  //   // runs before each test in this block
  // });

  // afterEach(function() {
  //   console.log('afterEach');
  //   // runs after each test in this block
  // });

  // test cases
  it('test 1' , function(){
    assert.equal(-1, [1,2,3].indexOf(4));
  })
  
  it('test 2' , function(){
    assert.equal(-1, [1,2,3].indexOf(4));
  })

  it('pending test');
});

describe('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 250);
  });
})