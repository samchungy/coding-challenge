/**
 * Overwrites the old venue with the new venue
 * @param {Object} newVenue 
 * @param {Object} oldVenue 
 */
function overwriteVenue(newVenue, oldVenue){
  for (let key in newVenue){
    if(newVenue.hasOwnProperty(key)){
      oldVenue[key] = newVenue[key];
    }
  }
  return oldVenue;
}

module.exports = {
  overwriteVenue
}