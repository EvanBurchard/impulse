var assert = require("assert");
var request = require('supertest');
var app = require('../app');

suite('getting pages', function(){
  test('GET / should return a 200, without errors, and contain the title (JS Arcade)', function(done){
    request(app).get('/')
    .expect('Content-Type', /text\/html/)
    .expect(200)
    .end(function(err, res){
      assert.equal(null, err);
      assert.ok(/Impulse/.test(res.text));
      done();
    });
  });
  test('GET /nonexistent_route should return a 404', function(done){
    request(app).get('/nonexistent_route')
    .expect('Content-Type', /text\/plain/)
    .expect(404, done)
  });
});
