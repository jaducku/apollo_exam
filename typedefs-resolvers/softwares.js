const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
    type Software implements Tool{
        id: ID!
        used_by: String!
        developed_by: String!
        description: String
    }
`
const resolvers = {
    Query: {
        softwares: (parent, args) => dbWorks.getSoftwares(args),
        software: (parent, args) => dbWorks.getSoftwares(args)[0]
    },
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}