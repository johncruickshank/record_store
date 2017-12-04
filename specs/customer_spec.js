var assert = require('assert');
var Customer = require('../customer.js');
var Record = require('../record.js');
var Store = require('../store.js');

describe ("Customer", function() {
  var record1, record2, record3;
  var store;
  var customer1, customer2;

  beforeEach(function() {
    record1 = new Record("Run The Jewels", "Run The Jewels 3", "rap", 8.99);
    record2 = new Record("The Weeknd", "Starboy", "hip hop", 9.99);
    record3 = new Record("Kanye West", "College Dropout", "hip hop", 12.99);
    store = new Store("Big Al's", "Glasgow", [record1, record2]);
    customer = new Customer(25);
    customer2 = new Customer(50);
  });

  it("should be able to sell a record", function() {
    customer.addRecord(record3);
    customer.sellRecord(record3);
    assert.strictEqual(customer.getCollection().length, 0);
    assert.strictEqual(customer.getCash(), 37.99);
  });

  it("should be able to buy a record", function() {
    customer.buyRecord(record2, store);
    assert.strictEqual(customer.getCollection().length, 1);
    assert.strictEqual(customer.getCash(), 15.01);
  });

  it("should be able to see the total value of their collection", function() {
    customer.addRecord(record1);
    customer.addRecord(record2);
    assert.strictEqual(customer.collectionValue(), 18.98);
  });

  it("should be able to get the total value for a specific genre", function() {
    customer.addRecord(record1);
    customer.addRecord(record2);
    customer.addRecord(record3);
    assert.strictEqual(customer.genreValue("hip hop"), 22.98);
  });

  it("should be able to view their most valuable record", function() {
  customer.addRecord(record1);
  customer.addRecord(record2);
  customer.addRecord(record3);
  assert.strictEqual(customer.getMostValuableRecord(), record3);
  });

  it("should be able to sort their collection by value", function() {
    customer.addRecord(record1);
    customer.addRecord(record2);
    customer.addRecord(record3);
    var orderDesc = "desc";
    assert.deepStrictEqual(customer.sortByValue(orderDesc), [record3, record2, record1]);
    var orderAsc = "asc";
    assert.deepStrictEqual(customer.sortByValue(orderAsc), [record1, record2, record3]);
  });

  it("should be able to compare collection value with another customer", function() {
    customer.addRecord(record1);
    customer.addRecord(record2);
    customer2.addRecord(record3);
    assert.strictEqual(customer.compareWith(customer2), "higher");
  });

})
