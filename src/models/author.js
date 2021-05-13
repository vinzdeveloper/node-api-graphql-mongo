const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    fullname: { type: String },
    authorId: { type: Number },
    membership: { type: String },
  },
  { timestamps: { createdAt: 'joinedAt',
    updatedAt: 'updatedAt' } });

module.exports = mongoose.model("authors", AuthorSchema);