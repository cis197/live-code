const gql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = gql;

const { owner, pet } = require('../dbconnect');

const PetType = new GraphQLObjectType({
  name: 'Pet',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

module.exports = {
  PetType,
  mutations: {
    createPet: {
      type: PetType,
      args: {
        name: { type: GraphQLString },
        ownerId: { type: GraphQLString }
      },
      resolve(parent, args) {
        return pet.create({
          name: args.name,
          ownerId: args.ownerId
        });
      }
    }
  },
  queries: {
    pet: {
      type: PetType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return pet.findByPk(args.id);
      }
    }
  }
};
