module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    name: {
      type: DataTypes.STRING
    },
  }, { timestamps: false })

  Tag.associate = (models) => {
    Tag.belongsToMany(models.news, { through: 'NewsTag', timestamps: false });
  }

  return Tag;
}