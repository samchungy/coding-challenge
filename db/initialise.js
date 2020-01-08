const loki = require('lokijs');
const data = require('./mgqj-necz.json');
const db = new loki('test.db', {autosave: true});
const venues = db.addCollection('venues');
venues.insert(data);

module.exports = {
  venues
}