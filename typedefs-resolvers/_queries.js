const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        equipments: [Equipment]
        equipmentAdvs: [EquipmentAdv]
        softwares: [Software]
        software: Software
        supplies: [Supply]
        givens: [Given]
        people: [People]
        person: People
        peopleFiltered(
            team: Int,
            sex: Sex,
            blood_type: BloodType,
            from: String
        ): [People]
        peoplePaginated(
            page: Int!,
            per_page: Int!
        ): [People]
        roles: [Role],
        teams: [Team],
        elm_part_std: [ELM_PART_STD]
    }
`

module.exports = typeDefs