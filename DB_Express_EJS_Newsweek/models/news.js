module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('news', {
    topic: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING(9999)
    },
    date: {
      type: DataTypes.DATE
    },
    summary: {
      type: DataTypes.STRING(999)
    }
  }, { timestamps: false })

  News.associate = (models) => {
    News.belongsTo(models.author);
    News.hasMany(models.image);
    News.belongsToMany(models.tag, { through: 'NewsTag', timestamps: false });
  }

  return News;
}