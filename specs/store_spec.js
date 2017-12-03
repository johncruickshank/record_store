var assert = require('assert');
var Store = require('../store.js');
var Record = require('../record.js');

describe("Store", function() {
  var record1, record2, record3;
  var store;

  beforeEach(function() {
    record1 = new Record("Run The Jewels", "Run The Jewels 3", "rap", 8.99);
    record2 = new Record("The Weeknd", "Starboy", "hip hop", 9.99);
    record3 = new Record("Kanye West", "College Dropout", "hip hop", 12.99);
    store = new Store("Big Al's", "Glasgow");
  });

  it("should have a name", function() {
    assert.strictEqual(store.getName(), "Big Al's");
  });

  it("should have a city", function() {
    assert.strictEqual(store.getCity(), "Glasgow");
  });

  it("should start with an empty inventory", function() {
    assert.strictEqual(store.getInventory().length, 0);
  });

  it("should be able to add records to inventory", function() {
    store.addRecord(record1);
    assert.strictEqual(store.getInventory().length, 1);
  });

  it("should have a balance, starting at 0", function() {
    assert.strictEqual(store.getBalance(), 0);
  });

  it("should be able to set the balance", function() {
    store.setBalance(1000);
    assert.strictEqual(store.getBalance(), 1000);
  });

  it("should be able to display the whole inventory", function() {
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    assert.deepStrictEqual(store.getInventory(), [record1, record2, record3]);
  });

  it("should be able to sell a record, updating inventory and balance", function() {
    store.addRecord(record1);
    store.sellRecord(record1);
    assert.strictEqual(store.getInventory().length, 0);
    assert.strictEqual(store.getBalance(), 8.99);
  });

  it("should be able to report the financial situation of the store, showing the balance and value of inventory", function() {
    store.addRecord(record1);
    store.addRecord(record2);
    var stock = store.getInventoryValue();
    var storeBalance = store.getBalance();
    assert.strictEqual(store.getFinancialStatus(), "Store balance: £0, stock value: £18.98");
  });

  it("should allow the store to view all records of a given genre", function() {
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    assert.deepStrictEqual(store.filterGenre("hip hop"), [record2, record3]);
  });

})
