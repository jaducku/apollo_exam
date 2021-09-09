const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
    type ELM_PART_STD{
        SITE : String!
        WORK_TYPE : String!
        PROD : String!
        AREA : String!
        PART_MASK : String!
        NCH_LOT_CNT : String!
        NCH_LOT_QTY : String!
        MCP_MULTI : String!
        NCH_FLAG : String!
        INSP_FLAG : String!
    }
`

const resolvers = {
    Query:{
        elm_part_std: (parent,args) => dbWorks.getElmPartStds(args)
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}