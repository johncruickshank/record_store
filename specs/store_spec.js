var assert = require('assert');
var Store = require('../store.js');
var Record = require('../record.js');

describe("Store", function() {
  var record1, record2, record3;
  var store;

  beforeEach(function() {
    record1 = new Record("Run The Jewels", "Run The Jewels 3", "rap", 8.99);
    record2 = new Record("The Weeknd", "Starboy", "hip hop", 9.99);
    record2 = new Record("Kanye West", "College Dropout", "hip hop", 12.99);
    store = new Store("Big Al's", "Glasgow");
  })

})
