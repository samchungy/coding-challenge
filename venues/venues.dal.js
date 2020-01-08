const VENUES = 'venues';
const {db} = require('../db/initialise');


/**
 * Loads a venue from our database
 * @param {*} propertyNumber
 * @return {Array} Returns an array of venue objects
 */
function loadVenue(propertyNumber) {
  const venues = db.getCollection(VENUES);
  return venues.find({
    property_number: propertyNumber,
  });
}

/**
 * Updates a venue object in database
 * @param {Object} venue
 */
function updateVenue(venue) {
  const venues = db.getCollection(VENUES);
  venues.update(venue);
  return;
}

/**
 * Stores a venue into the database
 * @param {Object} venue
 */
function storeVenue(venue) {
  const venues = db.getCollection(VENUES);
  venues.insert(venue);
  return;
}

/**
 * Removes a venue from our database
 * @param {Object} venue
 */
function removeVenue(venue) {
  const venues = db.getCollection(VENUES);
  venues.remove(venue);
  return;
}

module.exports = {
  loadVenue,
  storeVenue,
  removeVenue,
  updateVenue,
};
