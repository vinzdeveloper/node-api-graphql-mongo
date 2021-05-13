const AuthorRoots = require('./author');
const PostRoots = require('./post');

const AppRoot = {
    ...AuthorRoots,
    ...PostRoots
};

module.exports = AppRoot;