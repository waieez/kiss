var expect = require('chai').expect;
var sinon = require('sinon');
var request = require('supertest');
var app = require('.././server/server');
var model = require('.././server/model');

describe('API', function () {
  describe('GET', function () {

    it('GET should return an object with the count of the number of matches for a query', function (done) {
      request(app)
        .get('/api/metrics/1')
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          
          done();
        })
    });
  });
});
