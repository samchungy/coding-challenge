const {fetchPub} = require('./pubs.api');

/**
 * Gets a pub based on a id
 */
async function getPub(propertyId){
  console.log(propertyId);
  try {
    let pubsArray = (await fetchPub(propertyId)).data;
    if (pubsArray.length == 0){
      return null;
    } else {
      //Return the newest pub from data
      const newest = pubsArray.reduce(function(prev, current) {
        return (prev.census_year > current.census_year) ? prev : current
      });
      return newest;
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPub
}