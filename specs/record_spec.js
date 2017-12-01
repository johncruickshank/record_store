var assert = require('assert');
var Record = require('../record.js');

describe("Record", function() {
  var record;

  beforeEach(function() {
    record = new Record("Run The Jewels", "Run The Jewels 3", "rap", 8.99);
  });

  it("should have an artist", function() {
    assert.strictEqual(record.getArtist(), "Run The Jewels");
  });

});
