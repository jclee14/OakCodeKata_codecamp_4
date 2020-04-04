module.exports = (app, db) => {
  app.get('/tag', async (req, res) => {
    try {
      let result = await db.tag.findAll();
      res.status(201).json(result);
    }
    catch (err) {
      console.log(err);
      res.status(400).json();
    }
  });

  app.post('/createTag', async (req, res) => {
    name = req.body.name;

    try {
      let result = await db.tag.create({
        name: name.toLowerCase(),
      });
      res.status(201).json(result);
    }
    catch (err) {
      console.log(err);
      res.status(400).json();
    }
  });

  app.put('/updateTag/:id', async (req, res) => {
    name = req.body.name;

    try {
      let result = await db.tag.update(
        {
          name: name.toLowerCase()
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

  app.delete('/deleteTag/:id', async (req, res) => {
    try {
      let result = await db.tag.destroy({
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