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