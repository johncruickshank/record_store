var _ = require("lodash");
var Record = require('./record.js');
var Store = require('./store.js');

var Customer = function(cash) {
  this.cash = cash;
  this.collection = [];
};

Customer.prototype = {

  getCash: function() {
    return this.cash;
  },

  addRecord: function(record) {
    this.collection.push(record);
  },

  getCollection: function() {
    return this.collection;
  },

  sellRecord: function(record) {
    this.cash += record.price;
    var index = (this.collection).indexOf(record);
    this.collection.splice(index, 1);
  },

  buyRecord: function(record, store) {
    if (this.cash > record.price) {
      store.sellRecord(record);
      this.cash -= record.price;
      this.collection.push(record);
    };
  },

  collectionValue: function() {
    return _.sumBy(this.collection, "price");
  },

  genreValue: function(genre) {
    return _.sumBy(_.filter(this.collection, ['genre', genre]), "price");
  },

  getMostValuableRecord: function() {
    return _.maxBy(this.collection, function(record) {
  		return record.price;
		});
  },

  sortByValue: function(order) {
    return _.orderBy(this.collection, ["price"], [order]);
  },

  compareWith: function(competitor) {
    if (this.collectionValue() > competitor.collectionValue()) {
      return "higher";
    } else if (this.collectionValue() > competitor.collectionValue()) {
      return "lower";
    } else
      return "draw";
  }

};


module.exports = Customer;
