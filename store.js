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
  }

  getBalance: function() {
    return this.balance;
  },

  setBalance: function(amount) {
    this.balance = amount;
  }

};

module.exports = Store;
