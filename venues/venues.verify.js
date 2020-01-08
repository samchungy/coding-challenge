const {locationProperties, modelVenue, modelVenueProperties, websiteProperties} = require('./venues.model');

/**
 * Checks that the sent object is valid
 * @param {Object} model 
 */
function verifyModel(model){

  //Verify the fields we need are there.
  const errors = []
  const defaultModel = modelVenue();
  for (const key in defaultModel){
    if (defaultModel.hasOwnProperty(key)){
      if(!model.hasOwnProperty(key) || !model[key] ){
        errors.push(`${key} is missing`);
      }
      // Check Deeper for these keys
      if ((key == 'website' || key == 'location') && model.hasOwnProperty(key)){

        for (const key2 in defaultModel[key]){
          if (defaultModel[key].hasOwnProperty(key2)){
            if (!model[key].hasOwnProperty(key2) || !model[key][key2]){
              errors.push(`${key}.${key2} is missing`);
            }
          }
        }
      }
    }
  }

  if(errors.length > 0){
    return errors
  }

  //Check if we have any extra fields
  for (const key in model){
    if (model.hasOwnProperty(key)){
      if(!modelVenueProperties.includes(key)){
        errors.push(`invalid key: ${key}`)
      }
      if (key == 'website'){
        for (const key2 in model[key]){
          if (!websiteProperties.includes(key2)){
            errors.push(`invalid key: ${key}.${key2}`)
          }
        }
      }
      if (key == 'location'){
        for (const key2 in model[key]){
          if (!locationProperties.includes(key2)){
            errors.push(`invalid key: ${key}.${key2}`)
          }
        }
      }
    }
  }

  return errors;
}

module.exports = {
  verifyModel
}