const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String },
    content: { type: String },
    postId: { type: Number },
    authorId: { type: Number },
    },
    { timestamps: true });

module.exports = mongoose.model("posts", PostSchema);