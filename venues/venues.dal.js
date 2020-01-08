const {venues} = require('../db/initialise');

/**
 * Loads a venue from our database
 * @param {*} propertyNumber 
 */
function loadVenue(propertyNumber){
  return venues.find({
    property_number: propertyNumber
  })
}

/**
 * Stores a venue into the database
 * @param {Object} venue 
 */
function storeVenue(venue){
  return venues.insert(venue);
}



module.exports = {
  loadVenue,
  storeVenue
}