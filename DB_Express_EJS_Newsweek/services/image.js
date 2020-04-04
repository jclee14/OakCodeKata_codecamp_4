module.exports = (app, db) => {
  app.get('/image', async (req, res) => {
    try {
      let result = await db.image.findAll();
      res.status(201).json(result);
    }
    catch (err) {
      console.log(err);
      res.status(400).json();
    }
  });

  app.post('/createImage', async (req, res) => {
    url = req.body.url;
    description = req.body.description;
    newsId = req.body.newsId;

    try {
      let result = await db.image.create({
        url: url,
        description: description,
        newsId: newsId
      });
      res.status(201).json(result);
    }
    catch (err) {
      console.log(err);
      res.status(400).json();
    }
  });

  app.put('/updateImage/:id', async (req, res) => {
    url = req.body.url;
    description = req.body.description;
    newsId = req.body.newsId;

    try {
      let result = await db.image.update(
        {
          url: url,
          description: description,
          newsId: newsId
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

  app.delete('/deleteImage/:id', async (req, res) => {
    try {
      let result = await db.image.destroy({
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