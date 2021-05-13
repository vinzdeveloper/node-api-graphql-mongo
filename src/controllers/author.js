const Author = require('../models/author');
const Post = require('../models/post');

const AuthorRoots = {
    getAuthorById: async ({ id }) => {
        try {
            const author = await Author.findOne({ authorId: id });
            const post = await Post.find({ authorId: id });
            Object.assign(author, { post });
            return author;
        } catch(err) {
            console.error(err);
            return Promise.reject(err.message);
        }
    },
    addAuthor: async ({ author }) => {
        try {
            const result = await Author.create(author);
            return result;
        } catch(err) {
            console.error(err);
            return Promise.reject(err.message);
        }
    },
    updateAuthorMembership: async ({ author, id }) => {
        try {
            const result = await Author.updateOne({ authorId: id }, { membership: author.membership });
            return result.nModified;
        } catch(err) {
            console.error(err);
            return Promise.reject(err.message);
        }
    }
};

module.exports = AuthorRoots;