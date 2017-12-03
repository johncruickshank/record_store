var _ = require("lodash");

var Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype = {

  getArtist: function() {
    return this.artist;
  },

  getTitle: function() {
    return this.title;
  },

  getGenre: function() {
    return this.genre;
  },

  getPrice: function() {
    return this.price;
  },

  printRecord: function() {
    return "The record is " + this.title + " by " + this.artist + ". It is a " + this.genre + " album and ccurrently costs £" + this.price;
  }

};

module.exports = Record;
