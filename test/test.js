var assert = require("assert");
var request = require('supertest');
var app = require('../app');
require('wish');

suite('getting pages', function(){
  test('GET / should return a 200, without errors, and contain the title (Impulse)', function(done){
    request(app).get('/')
    .expect('Content-Type', /text\/html/)
    .expect(200)
    .end(function(err, res){
      wish(null === err);
      wish(/Impulse/.test(res.text));
      done();
    });
  });
  test('GET /nonexistent_route should return a 404', function(done){
    request(app).get('/nonexistent_route')
    .expect('Content-Type', /text\/plain/)
    .expect(404, done)
  });
});
