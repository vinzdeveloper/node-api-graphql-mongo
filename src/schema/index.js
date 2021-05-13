const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Post {
        title: String
        content: String
        postId: Int
        authorId: Int
        createdAt: String
        updatedAt: String
    }
    type Author {
        fullname: String
        authorId: Int
        membership: String
        joinedAt: String
        updatedAt: String
        post: [Post]
    }
    input AuthorInput {
        fullname: String
        authorId: Int
        membership: String
    }
    input PostInput {
        title: String
        content: String
        postId: Int
        authorId: Int
    }
    type Query {
        getAuthorById(id: Int): Author
        getPostByAuthorId(id: Int): [Post]
        removePost(id: Int): Boolean
    }
    type Mutation {
        addAuthor(author: AuthorInput): Author
        addPost(post: PostInput): Post
        updateAuthorMembership(author: AuthorInput, id: Int): Int
    }`
);

module.exports = schema;