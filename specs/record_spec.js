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

  it("should have a title", function() {
    assert.strictEqual(record.getTitle(), "Run The Jewels 3");
  });

  it("should have a genre", function() {
    assert.strictEqual(record.getGenre(), "rap");
  });

  it("should have a price", function() {
    assert.strictEqual(record.getPrice(), 8.99);
  });

  it("should print out properties of a given record as a string", function() {
    var expected = "The record is Run The Jewels 3 by Run The Jewels. It is a rap album and ccurrently costs £8.99"
    assert.strictEqual(record.printRecord(), expected);
  });

});
