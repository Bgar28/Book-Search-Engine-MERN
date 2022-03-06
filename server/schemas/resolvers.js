const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        // find a user
        //context in the query allows thr logged in user to be retrieved without specifically searching for them
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id });
                return userData
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        // authuroize a user after they're authenticated
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found! Please try again!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('No user found! Please try again!');
            }

            const token = signToken(user);
            return { token, user };
        },
        // create a new user
        addUser: async (parent, args) => {
            try {
                const user = await User.create(args);
                const token = signToken(user);

                return { token, user }
            } catch (err) {
                console.log(err)
            }
        },

        // allow a signed user to remove a book from their profile
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const userBooks = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: args.bookId } } },
                    { new: true }
                );

                return userBooks;
            }

            throw new AuthenticationError("You need to be signed in!");
        },

        // allow a signed in user to save a book to their profile
        saveBook: async (parent, { input }, context) => {
            if (context.user) {
                const userBooks = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: input } },
                    {
                        new: true,
                        runValidators: true
                    }
                );
                return userBooks;
            }
            throw new AuthenticationError("You need to be signed in!");
        },
    },
}


module.exports = resolvers;