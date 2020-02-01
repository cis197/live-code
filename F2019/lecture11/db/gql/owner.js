const gql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = gql;

const { owner, pet } = require('../dbconnect');

const { PetType } = require('./pet');

const OwnerType = new GraphQLObjectType({
  name: 'Owner',
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    pets: {
      type: new GraphQLList(PetType),
      resolve(parent, args) {
        return owner.findByPk(parent.id).then(o => o.getPets());
      }
    }
  })
});

module.exports = {
  OwnerType,
  mutations: {
    createOwner: {
      type: OwnerType,
      args: {
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString }
      },
      resolve(parent, args) {
        return owner.create({
          firstname: args.firstname,
          lastname: args.lastname
        });
      }
    }
  },
  queries: {
    owner: {
      type: OwnerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return owner.findByPk(args.id);
      }
    }
  }
};
