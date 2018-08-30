'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true
      }  
    },
    reputation: DataTypes.INTEGER,
    salt: DataTypes.STRING,
    role: DataTypes.ENUM('UNFERIFIED_USER', 'USER', 'VERIFIED_CONTRIBUTOR', 'ADMIN')
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Question, {
      foreignKey: 'author_id',
    })
    User.hasMany(models.Answer, {
      foreignKey: 'answer_author_id',
    })
  };
  return User;
};