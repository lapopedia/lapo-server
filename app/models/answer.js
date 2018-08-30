'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    answer_author_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    content_answer: DataTypes.STRING,
    vote: DataTypes.INTEGER
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.belongsTo(models.User, { foreignKey: 'answer_author_id', as: 'users_answer', onDelete: 'CASCADE' });
    Answer.belongsTo(models.Question, { foreignKey: 'question_id', onDelete: 'CASCADE' });
  };
  return Answer;
};