const axios = require('axios');
const API_ENDPOINT = 'https://data.melbourne.vic.gov.au/resource/mffi-m9yn.json';

/**
 * Fetches pub from
 * @param {string} propertyId
 */
async function fetchPub(propertyId) {
  try {
    const params = {
      property_id: propertyId,
    };
    return await axios.get(API_ENDPOINT, {params} );
  } catch (error) {
    console.error(`Pub API: Fetch failed`, error);
    throw error;
  }
}

module.exports = {
  fetchPub,
};
