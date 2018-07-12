const notesdb = require('../db/firedb')("notes")

module.exports = function (app, db) {
  app.get('/api/notes', (req, res) => {
    notesdb.all().then(notes => {
      res.json(notes)
    })
  });

  app.get('/api/notes/:id', (req, res) => {
    notesdb.findById(req.params.id).then(note => {
      res.json(note)
    })
  });

  app.post('/api/notes', (req, res) => {
    notesdb.add(req.body).then(newItem => {
      res.json(newItem)
    })
  });

  app.put('/api/notes/:id', (req, res) => {
    const id = req.params.id
    notesdb.update({
      ...req.body,
      id: id
    }).then(updatedItem => {
      res.json(updatedItem)
    })
  });

  app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id
    notesdb.remove(id).then(() => {
      res.send(`Sucessfully deleted note with id=${id}`)
    })
  })
};