const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { siggnToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getSingleUser: async (parent,args,context) => {
            if (context.user) {
                const userData = await User.findOne({
                    _id: context.user._id
                })
                return userData
            }
            throw new AuthenticationError('Cannot find the user')
        }
    },
    Mutation: {
        User
    }
}

module.exports = resolvers