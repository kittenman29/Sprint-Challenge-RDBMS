const router = require('express').Router();
const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/rolex.db3'
  }
}

const db = knex(knexConfig);


router.post('/', (req, res) => {
    db('projects')
    .insert(req.body)
    .then(ids => {
        const[id] = ids
        db('projects')
        .where({id})
        .first()
        .then(projects => {
            res.status(200).json(projects)
        })
    })
    .catch(error => {
        res.status(500).json(error)
    })
  });
  
  router.get('/', (req, res) => {
    db('projects')
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(error => {
      res.status(500).json(error)
    })
  });
  
  router.get('/:id', (req, res) => {
    const {id} = req.params
    db('projects')
    .where({id})
    .first()
    .then(projects => {
        if(projects) {
            res.status(200).json(projects)
        } else {
            res.status(404).json({message: "project not found"})
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
  });

  module.exports = router;