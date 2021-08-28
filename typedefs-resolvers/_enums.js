const { gql } = require('apollo-server');

const typeDefs = gql`
    enum Sex {
        male
        female
    }
    enum BloodType {
        A
        B
        AB
        O
    }
    enum NewOrUsed {
        new
        used
    }
`

module.exports = typeDefs