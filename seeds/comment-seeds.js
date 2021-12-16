const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "This assignment was fun to do",
    post_id: 1,
    user_id: 1
  },
  {
    comment_text: "pretty straightforward",
    post_id: 2,
    user_id: 2
  },
  {
    comment_text: "learning about SQL was my favorite",
    post_id: 3,
    user_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;