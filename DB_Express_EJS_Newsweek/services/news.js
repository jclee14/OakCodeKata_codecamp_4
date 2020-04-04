module.exports = (app, db) => {
  app.get('/news', async (req, res) => {
    try {
      let result = await db.news.findAll();
      res.status(201).json(result);
    }
    catch (err) {
      console.log(err);
      res.status(400).json();
    }
  });

  app.post('/createNews', async (req, res) => {
    topic = req.body.topic;
    content = req.body.content;
    summary = req.body.summary;
    date = req.body.date;
    authorId = req.body.authorId;

    try {
      let result = await db.news.create({
        topic: topic,
        content: content,
        summary: summary,
        date: date,
        authorId: authorId
      });
      res.status(201).json(result);
    }
    catch (err) {
      console.log(err);
      res.status(400).json();
    }
  });

  app.put('/updateNews/:id', async (req, res) => {
    topic = req.body.topic;
    content = req.body.content;
    summary = req.body.summary;
    date = req.body.date;
    authorId = req.body.authorId;

    try {
      let result = await db.news.update(
        {
          topic: topic,
          content: content,
          summary: summary,
          date: date,
          authorId: authorId
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

  app.delete('/deleteNews/:id', async (req, res) => {
    try {
      let result = await db.news.destroy({
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