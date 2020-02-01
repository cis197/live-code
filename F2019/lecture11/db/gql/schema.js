const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const {
  OwnerType,
  queries: ownerQueries,
  mutations: ownerMutations
} = require('./owner');
const {
  PetType,
  queries: petQueries,
  mutations: petMutations
} = require('./pet');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...ownerQueries,
    ...petQueries
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...ownerMutations,
    ...petMutations
  }
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
