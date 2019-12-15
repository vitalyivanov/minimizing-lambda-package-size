import { ApolloServer } from 'apollo-server-lambda'
import { resolvers } from './resolvers'

const typeDefs = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Item {
    id: ID!
    name: String!
    description: String
  }

  type Query {
    item(id: ID!): Item
    items: [Item!]!
  }

  type Mutation {
    createItem(name: String!, description: String!): Item!
    updateItem(id: ID!, name: String, description: String): Item!
    deleteItem(id: ID!): ID!
  }
`

const server = new ApolloServer({
  typeDefs,
  resolvers
})

export const graphql = server.createHandler({
  cors: {
    origin: true,
    credentials: true
  }
})
