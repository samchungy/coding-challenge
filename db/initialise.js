const VENUES = 'venues';
const loki = require('lokijs');
const data = require('./mgqj-necz.json');
const db = new loki('test.db', {autosave: true});
const fs = require('fs');
const {getPub} = require('../pubs/pubs.controller');

// If collection is empty do not load it, instead - create a new file
db.loadDatabase(null, async () => {
  console.log("db initialising");
  venues = db.getCollection(VENUES);
  if (venues === null){
    console.log('no existing db');
    venues = db.addCollection(VENUES);
    venues.insert(data);
    console.log("db created");
  }
})

module.exports = {
  db
}