module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING
    }, {});
    User.associate = function(models) {
      // associations can be defined here
      User.hasMany(models.Task, {
        foreignKey: 'userId',
      })
      User.hasMany(models.Project, {
        foreignKey: 'userId',
      })
    };
    return User;
  };