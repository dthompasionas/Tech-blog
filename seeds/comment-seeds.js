const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Honestly there are to many to count but I would say if you find something fun from what you were learning, try a job with that first.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I have multiple playlist of LO-FI. Always helps.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Nothing better than some pizza rolls or sour patch.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "I love it too! even tho sometimes i miss my friends but hey I can always call.",
    user_id: 4,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
