const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
    type Supply {
        id: ID!
        team: Int
    }
`
const resolvers = {
    Query: {
        supplies: (parent, args) => dbWorks.getSupplies(args),
    },
    Mutation: {
        deleteSupply: (parent, args) => dbWorks.deleteSupply('supplies', args),
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}