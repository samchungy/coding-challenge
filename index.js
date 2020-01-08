const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const PORT = process.env.PORT || 1337;
const routes = require('./routes');

app.use(bodyParser());

// routes
app.use(routes.routes());

// server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;