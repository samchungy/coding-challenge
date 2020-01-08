const server = require('../index');
const request = require('supertest');

beforeAll(async () => {
  await (new Promise((resolve) => setTimeout(resolve, 500)));
})

beforeEach(async () => {
  jest.clearAllMocks();
});

// close the server after each test
afterEach(() => {
  server.close();
});

describe(`Invalid Delete Request`, () => {
  test('should error out - No such venue exists', async () => {
    const response = await request(server)
        .delete('/api/venue')
        .send({property_number: "1096"});
    expect(response.status).toEqual(400);
  });
});

describe(`Basic Delete Request`, () => {
  test('should successfully delete a record', async () => {
    let number = Math.random();
    await request(server)
      .post('/api/venue')
      .send({
        "property_number": number,
        "venue_name": "Aria Bar & Lounge",
        "venue_address": "Podium, 1 Southgate Avenue, Southbank, 3006",
        "space_type": "Hello",
        "website": {
            "url": "http://www.sebeldocklands.com.au/en/meeting-rooms/aria-bar-and-events.html"
        },
        "lat": "-37.82047861515797",
        "lon": "144.96589092458512",
        "location": {
            "type": "Point",
            "coordinates": [
                144.965890924585,
                -37.820478615158
            ]
        }
    })
    const response = await request(server)
        .delete('/api/venue')
        .send({property_number: number});
    expect(response.status).toEqual(200);
  });
});
