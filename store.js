var _ = require("lodash");
var Record = require('./record.js');

var Store = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

Store.prototype = {

  getName: function() {
    return this.name;
  },

  getCity: function() {
    return this.city;
  },

  getInventory: function() {
    return this.inventory;
  },

  getBalance: function() {
    return this.balance;
  },

  setBalance: function(amount) {
    this.balance = amount;
  },

  addRecord: function(record) {
    this.inventory.push(record);
  },

  sellRecord: function(record) {
    var index = (this.inventory).indexOf(record);
    this.inventory.splice(index, 1);
    this.balance += record.price;
  },

  getInventoryValue: function() {
    return _.sumBy(this.inventory, "price");
  },

  getFinancialStatus: function() {
    return "Store balance: £" + this.balance + ", stock value: £" + this.getInventoryValue();
  },

  filterGenre: function(genre) {
    return _.filter(this.inventory, ['genre', genre]);
  }

};

module.exports = Store;
