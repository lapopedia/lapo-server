'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    author_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    title: DataTypes.STRING,
    vote: DataTypes.INTEGER,
    tag: DataTypes.ARRAY(DataTypes.TEXT),
    is_active: DataTypes.BOOLEAN
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.belongsTo(models.User, { foreignKey: 'author_id', onDelete: 'CASCADE' });
    Question.hasMany(models.Answer, {
      foreignKey: 'question_id',
      as: 'answers'
    })
  };
  return Question;
};