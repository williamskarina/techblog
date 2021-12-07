const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "This assignment was fun to do",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "pretty straightforward",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "learning about SQL was my favorite",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "6 months went by super fast",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "I cant believe it",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "one week left",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;