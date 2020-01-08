const {loadVenue, storeVenue} = require('./venues.dal');
const {verifyModel} = require('./venues.verify');

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

async function putVenue(){

}

async function deleteVenue(){

}

module.exports = {
  getVenue,
  setVenue
}