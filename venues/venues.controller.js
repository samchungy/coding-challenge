const {loadVenue, removeVenue, storeVenue, updateVenue} = require('./venues.dal');
const {overwriteVenue} = require('./venues.update');
const {verifyModel} = require('./venues.verify');
const {getPub} = require('../pubs/pubs.controller');

/**
 * Gets a venue based on a property number
 * @param {Object} payload 
 */
async function getVenue(payload){
  console.log('here');
  if (payload.property_number){
    let venue = loadVenue(payload.property_number)
    if (venue.length){
      let pub = await getPub(payload.property_number);
      if (pub){
        venue[0].capacity = pub.number_of_patrons
      } else {
        venue[0].capacity = "UNKNOWN";
      }
    }
    return venue;
  } else {
    throw new Error("property_number not supplied");
  }
}

/**
 * Creates a venue based on a payload
 * @param {Object} payload 
 */
async function setVenue(payload){
  let errors = verifyModel(payload);
  if (errors.length > 0){
    return {success: false, errors: errors};
  }
  if (loadVenue(payload.property_number).length == 0){
    storeVenue(payload);
    return {success: true}
  } else{
    return {success: false, errors: "Venue already exists"}
  }

}

/**
 * Upates a venue based on a payload
 */
async function putVenue(payload){
  let errors = verifyModel(payload);
  if (errors.length > 0){
    return {success: false, errors: errors};
  }
  let venue = loadVenue(payload.property_number);
  if (venue.length){
    venue[0] = overwriteVenue(payload, venue[0]);
    console.log(venue[0]);
    updateVenue(venue[0]);
    return {success: true}
  } else{
    return {success: false, errors: "Venue does not exist"}
  }
}

/**
 * Deletes a venue based on a payload
 * @param {Object} payload 
 */
async function deleteVenue(payload){
  if (payload.property_number){
    let venue = loadVenue(payload.property_number);
    if (venue.length == 0){
      throw new Error("No such venue exists");
    }
    removeVenue(venue);
    return "Venue deleted";
  } else {
    throw new Error("property_number not supplied");
  }
}

module.exports = {
  getVenue,
  putVenue,
  setVenue,
  deleteVenue
}