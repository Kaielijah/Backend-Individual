var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:3000/";

describe("Express Server API", function() {
  describe("should return users json on get /kayden", function() {
      it("returns status code 200", function(done) {
        supertest(app)
          .get('/kayden')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });

      xit("returns a correct json format", function(done) {
        supertest(app)
          .get('/kayden')
          .expect({
            name: 'kai',
            age: 23,
            email: 'email@email.com'

          }, done);
      });
  });
});
