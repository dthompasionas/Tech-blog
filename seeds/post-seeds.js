const { Post } = require("../models");

const postData = [
  {
    title: "What jobs can I get with a CS degree?",
    content: "I know you can get quite a bit of jobs but im not sure which one will be good for me.",
    user_id: 1,
  },
  {
    title: "Trouble focusing",
    content:
      "Anyone else have trouble focusing while working on a project? What do you do to help?",
    user_id: 2,
  },
  {
    title: "Coding snacks",
    content:
      "Any good coding snack recommendations?",
    user_id: 3,
  },
  {
    title: "Remote working",
    content:
      "I have been loving the working from home thing, am I the only one?",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
