module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
      title: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.INTEGER
    }, {});
    Project.associate = function (models) {
      // associations can be defined here
      Project.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
    };
    return Project;
  };