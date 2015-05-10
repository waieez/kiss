var expect = require('chai').expect;
var sinon = require('sinon');
var request = require('supertest');
var app = require('.././server/server');
var model = require('.././server/model');

describe('API', function () {
  describe('GET', function () {

    it('GET should return an object with the count of the number of matches for a query', function (done) {
      var query = {
        metric_id: 15,
        start_date: 2011,
        time_range_length: 3
      }

      request(app)
        .get('/api/metrics/15')
        .send(query)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.body.data.length).to.equal(3);
          done();
        })
    });
  });
});
