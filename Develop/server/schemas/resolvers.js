const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { siggnToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async
    }
}