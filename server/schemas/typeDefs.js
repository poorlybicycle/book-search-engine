const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
}
type Book {
    author: [String]
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
}
type Auth {
    token: ID!
    user: User!
}
input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}
type Query {
    getSingleUser: User
}
type Mutation {
    login(username:String, email:String!, password:String!):Auth
    createUser(username:String, email:String!, password:String!):Auth
    saveBook(BookInput):User
    deleteBook(bookId:ID):User
}
`
module.exports = typeDefs