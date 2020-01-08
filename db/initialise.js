const VENUES = 'venues';
const Loki = require('lokijs');
const data = require('./mgqj-necz.json');
const db = new Loki('test.db', {autosave: true});

// If collection is empty do not load it, instead - create a new file
db.loadDatabase(null, async () => {
  console.log('db initialising');
  venues = db.getCollection(VENUES);
  if (venues === null) {
    console.log('no existing db');
    venues = db.addCollection(VENUES);
    venues.insert(data);
    console.log('db created');
  }
});

module.exports = {
  db,
};
