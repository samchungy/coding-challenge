const Router = require('koa-router');
const router = new Router();
const {deleteVenue, getVenue,
  putVenue, setVenue} = require('./venues/venues.controller');

router
    .get('/api/venue', async (ctx) => {
      try {
        const payload = ctx.request.body;
        const venue = await getVenue(payload);
        ctx.body = venue;
      } catch (error) {
        ctx.status = 400;
        ctx.body = error.message;
      }
    })
    .post('/api/venue', async (ctx) => {
      const payload = ctx.request.body;
      const {errors} = await setVenue(payload);
      if (errors && errors.length > 0) {
        ctx.status = 400;
        ctx.body = errors;
      } else {
        ctx.body = 'Venue Created';
      }
    })
    .delete('/api/venue', async (ctx) => {
      try {
        const payload = ctx.request.body;
        const venue = await deleteVenue(payload);
        ctx.body = venue;
      } catch (error) {
        ctx.status = 400;
        ctx.body = error.message;
      }
    })
    .put('/api/venue', async (ctx) => {
      const payload = ctx.request.body;
      const {errors} = await putVenue(payload);
      if (errors && errors.length > 0) {
        ctx.status = 400;
        ctx.body = errors;
      } else {
        ctx.body = 'Venue Updated';
      }
    });


module.exports = router;
