const user = require('./user');

const post = require('./post');

const comment = require('./comment');


User.hasMany(post, {
    foreignKey: 'user_id'
});

Post.belongsTo(user, {
    foreignKey: 'user_id'
});


Comment.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});


Comment.belongsTo(post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});


User.hasMany(comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});


Post.hasMany(comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
})


module.exports = { user, post, comment };