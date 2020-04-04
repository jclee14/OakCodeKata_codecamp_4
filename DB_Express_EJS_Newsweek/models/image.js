module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('image', {
    url: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  })

  Image.associate = (models) => {
    Image.belongsTo(models.news);
  }

  return Image;
}