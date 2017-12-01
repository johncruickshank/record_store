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
  }

};

module.exports = Record;
