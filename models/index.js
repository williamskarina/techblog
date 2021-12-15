const user = require('./user');

const post = require('./post');

const comment = require('./comment');


user.hasMany(post, {
    foreignKey: 'user_id'
});

post.belongsTo(user, {
    foreignKey: 'user_id'
});


comment.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});


comment.belongsTo(post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});


user.hasMany(comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});


post.hasMany(comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
})


module.exports = { user, post, comment };