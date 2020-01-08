const Router = require('koa-router');
const router = new Router();
const {getVenue, setVenue} = require('./venues/venues.controller');

router
.get('/api/venue', async (ctx) => {
  try {
    let payload = ctx.request.body;
    let venue = await getVenue(payload);
    ctx.body = venue;
  } catch (error) {
    ctx.status = 400;
    ctx.body = error.message;
  }

})
