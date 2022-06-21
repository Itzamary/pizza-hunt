const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    writtenBy: {
        type: String
    },
    commentBody: {
        type: String
    },
    cratedAt: {
        type: Date,
        defaule: Date.now
    }
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;