const server = require('../index');
const request = require('supertest');

beforeAll(async () => {
  await (new Promise((resolve) => setTimeout(resolve, 500)));
});

beforeEach(async () => {
  jest.clearAllMocks();
});

// close the server after each test
afterEach(() => {
  server.close();
});

describe(`Basic Put Request`, () => {
  test('should put an item successfully', async () => {
    const response = await request(server)
        .put('/api/venue')
        .send({
          'property_number': '62719312',
          'venue_name': 'Ariam Bar & Lounge',
          'venue_address': 'Podium, 1 Southgate Avenue, Southbank, 3006',
          'space_type': 'Hello',
          'website': {
            'url': 'http://www.sebeldocklands.com.au/en/meeting-rooms/aria-bar-and-events.html',
          },
          'lat': '-37.82047861515797',
          'lon': '144.96589092458512',
          'location': {
            'type': 'Point',
            'coordinates': [
              144.965890924585,
              -37.820478615158,
            ],
          },
        });
    expect(response.status).toEqual(200);
  });
});

describe(`Invalid Put Request`, () => {
  test('should fail', async () => {
    const response = await request(server)
        .put('/api/venue')
        .send({
          'propty_number': '62719312',
          'venue_name': 'Ariam Bar & Lounge',
          'venue_address': 'Podium, 1 Southgate Avenue, Southbank, 3006',
          'space_type': 'Hello',
          'website': {
            'url': 'http://www.sebeldocklands.com.au/en/meeting-rooms/aria-bar-and-events.html',
          },
          'lat': '-37.82047861515797',
          'lon': '144.96589092458512',
          'location': {
            'type': 'Point',
            'coordinates': [
              144.965890924585,
              -37.820478615158,
            ],
          },
        });
    expect(response.status).toEqual(400);
  });
});
