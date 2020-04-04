module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('author', {
    name: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
  }, { timestamps: false })

  Author.associate = (models) => {
    Author.hasMany(models.news);
  }

  return Author;
}