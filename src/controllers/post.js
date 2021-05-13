const Post = require('../models/post');

const PostRoots = {
    getPostByAuthorId: async ({ id }) => {
        try {
            const posts = await Post.find({ authorId: id });
            return posts;
        } catch(err) {
            console.error(err);
        }
    },
    addPost: async ({ post }) => {
        try {
            const result = await Post.create(post);
            return result;
        } catch(err) {
            console.error(err);
            return Promise.reject(err.message);
        }
    },
    removePost: async ({ id }) => {
        try {
            const result = await Post.findOneAndRemove({ postId: id });
            return !!result;
        } catch (err) {
            console.error(err);
            return Promise.reject(err.message);
        }
    }
};

module.exports = PostRoots;