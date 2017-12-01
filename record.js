var Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype = {

  getArtist: function() {
    return this.artist;
  }

};

module.exports = Record;
