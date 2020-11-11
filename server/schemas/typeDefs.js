const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Item {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    items: [Item]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    items(category: ID, name: String): [Item]
    item(_id: ID!): Item
    user: User
    order(_id: ID!): Order
    checkout(items: [ID]!): Checkout
  }
  

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(items: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateItem(_id: ID!, quantity: Int!): Item
    login(email: String!, password: String!): Auth
  }

  type Checkout {
    session: ID
  }
  
`;

module.exports = typeDefs;
