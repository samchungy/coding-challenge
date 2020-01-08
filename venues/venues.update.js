/**
 * Overwrites the old venue with the new venue
 * @param {Object} newVenue
 * @param {Object} oldVenue
 * @return {Object} Venue
 */
function overwriteVenue(newVenue, oldVenue) {
  for (const key in newVenue) {
    if (newVenue.hasOwnProperty(key)) {
      oldVenue[key] = newVenue[key];
    }
  }
  return oldVenue;
}

module.exports = {
  overwriteVenue,
};
