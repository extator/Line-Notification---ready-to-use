const { gql, GraphQLClient } = require('graphql-request')

const endpoint = 'https://api.aheadallsolution.com/graphql'
const client = new GraphQLClient(endpoint, { headers: {} })

const checkClient = async (mac) => {
    const query = gql`
        query($macaddress: String) {
            client(filter: { macaddress: $macaddress }) {
                _id
                serialboard
                macaddress
                address
            }
        }
    `

    const variable = {
        macaddress: mac
    }
    const data = await client.request(query, variable)
    return data
}

const checkStatus = async (Id) => {
    const query = gql`
        query($client: MongoID!) {
            event(filter: {client: $client},sort:_ID_DESC) {
                _id
                client {
                    macaddress
                    address
                }
                alarm_type
                start_time
                end_time
                userchecker {
                    name
                }
            }
        }
    `

    const variable = {
        client: Id
    }
    const data = await client.request(query, variable)
    return data
}

module.exports = {
    checkClient,
    checkStatus
}