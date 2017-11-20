"use strict"

const express = require('express');
const graphqlHTTP = require('express-graphql');

const {schema, rootValue} = require('./schema');

const graphiql = true;

const server = express();

function startServer() {
  server.use('/', graphqlHTTP({ schema, rootValue, graphiql })).listen(8080);
  console.log('Running GraphQL server at localhost:8080');
}

const app = {
  server,
  startServer
};

module.exports = app;
