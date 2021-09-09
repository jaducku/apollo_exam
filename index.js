const { ApolloServer } = require('apollo-server')
const queries = require('./typedefs-resolvers/_queries')
const mutations = require('./typedefs-resolvers/_mutations')
const enums = require('./typedefs-resolvers/_enums')
const equipments = require('./typedefs-resolvers/equipments')
const supplies = require('./typedefs-resolvers/supplies')
const givens = require('./typedefs-resolvers/givens')
const tools = require('./typedefs-resolvers/tools')
const softwares = require('./typedefs-resolvers/softwares')
const people = require('./typedefs-resolvers/people')
const roles = require('./typedefs-resolvers/roles')
const teams = require('./typedefs-resolvers/teams')
const elm_part_std = require('./typedefs-resolvers/elm_part_std')

const typeDefs = [
  queries,
  mutations,
  enums,
  equipments.typeDefs,
  supplies.typeDefs,
  givens.typeDefs,
  tools.typeDefs,
  softwares.typeDefs,
  people.typeDefs,
  roles.typeDefs,
  teams.typeDefs,
  elm_part_std.typeDefs
]

const resolvers = [
  equipments.resolvers,
  supplies.resolvers,
  givens.resolvers,
  tools.resolvers,
  softwares.resolvers,
  people.resolvers,
  roles.resolvers,
  teams.resolvers,
  elm_part_std.resolvers
]

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})