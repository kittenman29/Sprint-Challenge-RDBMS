const router = require('express').Router();
const knex = require('knex');

const Actions = require('../data/helpers/actionModel.js');

const knexConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/rolex.db3'
  }
}

const db = knex(knexConfig);


// router.post('/', (req, res) => {
//     db('actions')
//     Actions.insert(req.body)
//     .then(ids => {
//         const[id] = ids
//         db('actions')
//         .where({id})
//         .first()
//         .then(actions => {
//             res.status(200).json(actions)
//         })
//     })
//     .catch(error => {
//         res.status(500).json(error)
//     })
//   });
  
//   router.get('/', (req, res) => {
//     Actions.get()
//     .then(action => {
//         res.status(200).json(action)
//     })
//     .catch(error => {
//         res.status(500).json({message: 'Encountered an error retrieving the actions'})
//     })
// });
  
//   router.get('/:id', (req, res) => {
//     const {id} = req.params
//     db('actions')
//     .where({id})
//     .first()
//     .then(actions => {
//         if(actions) {
//             res.status(200).json(actions)
//         } else {
//             res.status(404).json({message: "action not found"})
//         }
//     })
//     .catch(error => {
//         res.status(500).json(error)
//     })
//   });

router.get('/', (req, res) => {
    Actions.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        res.status(500).json({message: 'Encountered an error retrieving the actions'})
    })
});

// Get actions by ID
router.get('/:id', (req, res) => {
    const {id} = req.params
    Actions.get(id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        res.status(500).json({error: 'Encountered an error retrieving the action'})
    })
  });

// Add new action
router.post('/', async (req, res) => {
    const { project_id, description, notes } = req.body;
    console.log(project_id, description, notes);
    try {
        if (!project_id || !description || !notes) {
            res.status(400).json({error: 'You are missing a project id, description, or notes' })
        }
        console.log(project_id, description, notes);
        Actions.insert({
            project_id,
            description,
            notes
        })
        .then(action => {
            res.status(201).json(action);
        })
        .catch(error => {
            res.status(500).json({error: "There was an error adding a new action" })
        })
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error: "you fucked up somewhere along the line" })
    }
})

  module.exports = router;