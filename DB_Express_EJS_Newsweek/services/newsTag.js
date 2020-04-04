module.exports = (app, db) => {
  app.get('/newstag', async (req, res) => {
    try {
      let result = await db.news.findAll();
      res.status(201).json(result);
    }
    catch (err) {
      console.log(err);
      res.status(400).json();
    }
  });

  app.post('/createNewsTag', async (req, res) => {
    const newsId = req.body.newsId;
    const tagId = req.body.tagId;

    try {
      const news = await db.news.findByPk(newsId);
      const tag = await db.tag.findByPk(tagId);

      const result = await news.addTag(tag);
      res.status(201).json(result);
    }
    catch (err) {
      console.log(err);
      res.status(400).json();
    }
  });

  app.put('/updateNewsTag/:id', async (req, res) => {
    const newsId = req.body.newsId;
    const tagId = req.body.tagId;

    try {
      let result = await db.newstag.update(
        {
          newsId: newsId,
          tagId: tagId
        },
        {
          where: { id: req.params.id }
        }
      );
      res.status(200).json(result);
    }
    catch (err) {
      console.log(err);
      res.send(400).json();
    }
  });

  app.delete('/deleteNewsTag/:id', async (req, res) => {
    try {
      let result = await db.newstag.destroy({
        where: { id: req.params.id }
      });
      res.send(204).json();
    }
    catch (err) {
      console.log(err);
      res.send(400).json();
    }
  })
}