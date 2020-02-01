const server = require('express')();
const graphqIHTTP = require('express-graphql');

const schema = require('./db/gql/schema');

require('./db/dbconnect');

server.use(
  '/graphql',
  graphqIHTTP(req => ({
    schema,
    graphiql: true
  }))
);

server.listen(3000);
