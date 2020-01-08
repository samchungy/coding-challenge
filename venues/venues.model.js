const modelVenue = (propertyNumber, venueName, venueAddress, spaceType, url, lat, lon, coordLon, coordLat) => {
  return {
    property_number: propertyNumber,
    venue_name: venueName,
    venue_address: venueAddress,
    space_type: spaceType,
    website: {
      url: url
    },
    lat: lat,
    lon: lon,
    location: {
      type: "Point",
      coordinates: [
        coordLon,
        coordLat
      ]
    }
  }
}

const modelVenueProperties = ['property_number', 'venue_name', 'venue_address', 'space_type', 'website', 'lat', 'lon', 'location'];
const websiteProperties = ['url'];
const locationProperties = ['type', 'coordinates'];

module.exports = {
  locationProperties,
  modelVenue,
  modelVenueProperties,
  websiteProperties
}