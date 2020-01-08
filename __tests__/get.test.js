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

describe(`Basic Get Request`, () => {
  test('should get an item successfully', async () => {
    const response = await request(server)
        .get('/api/venue')
        .send({property_number: "506429"});
    expect(response.status).toEqual(200);
  });
});

describe(`Basic Get Request with capacity`, () => {
  test('should get an item successfully', async () => {
    const response = await request(server)
        .get('/api/venue')
        .send({property_number: "109436"});
    expect(response.text.includes(`capacity":"100`)).toEqual(true);
    expect(response.status).toEqual(200);
  });
});

describe(`Invalid Get Request`, () => {
  test('should fail', async () => {
    const response = await request(server)
        .get('/api/venue')
        .send({propertsy_number: "109436"});
    expect(response.status).toEqual(400);
  });
});

