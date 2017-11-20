"use strict"

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    dice(num: Int!, side: Int): [Int]
  }
`);

const rootValue = {
  dice: ({num, side}) => {
    const output = [];
    for (let i = 0; i < num; i++) {
      output.push(
        Math.floor( Math.random() * (side || 6) ) + 1
      );
    }   
    return output;
  }
}

module.exports = {schema, rootValue};