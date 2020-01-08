const VENUES = 'venues';
const {db} = require('../db/initialise');


/**
 * Loads a venue from our database
 * @param {*} propertyNumber 
 */
function loadVenue(propertyNumber){
  const venues = db.getCollection(VENUES);
  return venues.find({
    property_number: propertyNumber
  })
}

function updateVenue(venue){
  const venues = db.getCollection(VENUES);
  return venues.update(venue);
}

/**
 * Stores a venue into the database
 * @param {Object} venue 
 */
function storeVenue(venue){
  const venues = db.getCollection(VENUES);
  return venues.insert(venue);
}

function removeVenue(venue){
  const venues = db.getCollection(VENUES);
  return venues.remove(venue)
}

module.exports = {
  loadVenue,
  storeVenue,
  removeVenue,
  updateVenue
}