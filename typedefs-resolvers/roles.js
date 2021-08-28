const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
    type Role {
        id: ID!
        job: String!
        requirement: String
    }
`

const resolvers = {
    Query: {
        roles : (parent, args) => dbWorks.getRoles(args)
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}