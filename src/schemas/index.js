import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './../resolvers/book-resolver'

const typeDef = `
    type Query {
        libraries: [Library]
        distinctBooks: [Book]
        distinctAuthors: [String]
    }

    type Library {
        _id: ID
        name: String!
        city: String
        books: [Book]
    }

    type Book {
        _id: ID
        name: String!
        prologue: String
        author: String!
        year: Int
    }
    `;

export default makeExecutableSchema({
    typeDefs: typeDef,
    resolvers: resolvers
})