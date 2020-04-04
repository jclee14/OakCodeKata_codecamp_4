module.exports = (app, db) => {
  app.get('/author', async (req, res) => {
    try {
      let result = await db.author.findAll();
      res.status(201).json(result);
    }
    catch (err) {
      console.log(err);
      res.status(400).json();
    }
  });

  app.post('/createAuthor', async (req, res) => {
    name = req.body.name;
    role = req.body.role;
    image = req.body.image;

    try {
      let result = await db.author.create({
        name: name.toLowerCase(),
        role: role.toLowerCase(),
        image: image
      });
      res.status(201).json(result);
    }
    catch (err) {
      console.log(err);
      res.status(400).json();
    }
  });

  app.put('/updateAuthor/:id', async (req, res) => {
    name = req.body.name;
    role = req.body.role;
    image = req.body.image;

    try {
      let result = await db.author.update(
        {
          name: name.toLowerCase(),
          role: role.toLowerCase(),
          image: image
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

  app.delete('/deleteAuthor/:id', async (req, res) => {
    try {
      let result = await db.author.destroy({
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