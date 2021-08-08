// import our 3 models created in the other files
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
  // as foreign key to User
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  // set cascade if foreignKey does not allow nulls
  onDelete: "cascade",
});

// adds a foreign key and singular association mixins to the source
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});
module.exports = { User, Post, Comment };
