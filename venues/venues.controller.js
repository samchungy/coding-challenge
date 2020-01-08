const {loadVenue, storeVenue} = require('./venues.dal');
const {verifyModel} = require('./venues.verify');

async function getVenue(payload){
  console.log(payload)
  if (payload.property_number){
    return loadVenue(payload.property_number)
  } else {
    throw new Error("property_number not supplied");
  }
}
