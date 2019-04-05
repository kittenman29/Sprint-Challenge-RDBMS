const router = require('express').Router();
const knex = require('knex');

const Projects = require('../data/helpers/projectModel.js');


const knexConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/rolex.db3'
  }
}

const db = knex(knexConfig);


// router.post('/', (req, res) => {
//     db('projects')
//     Projects.insert(req.body)
//     .then(ids => {
//         const[id] = ids
//         db('projects')
//         .where({id})
//         .first()
//         .then(projects => {
//             res.status(200).json(projects)
//         })
//     })
//     .catch(error => {
//         res.status(500).json(error)
//     })
//   });
  
//   router.get('/', (req, res) => {
//     db('projects')
//     .then(projects => {
//       res.status(200).json(projects)
//     })
//     .catch(error => {
//       res.status(500).json(error)
//     })
//   });
  
  router.get('/:id', (req, res) => {
    const {id} = req.params
    Projects.get(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({message: 'Encountered an error retrieving the projects'})
    })
  });

// Get all projects
router.get('/', (req, res) => {
    Projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({message: 'Encountered an error retrieving the projects'})
    })
});


// // Get projects by ID
// router.get('/:id', (req, res) => {
//     const project = await Projects.get(req.params.id).catch(res.status(500).json({ error: "Await error" }));
//     console.log(req.params.id);
//     try {
//         if(project) {
//             res.status(200).json(project);
//         } else {
//             res.status(404).json({ message: "The project you are looking for doesn't exist" });
//         }
//     }
//     catch {
//         res.status(500).json({ error: "The project information could not be retrieved" });
//     }
// })

// Add new project
router.post('/', async (req, res) => {
    const project = req.body;
    console.log(project);
    try {
        if (!project) {
            res.status(400).json({error: 'You are missing a description, or name' })
        }
        console.log(project);
        Projects.insert(project)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => {
            res.status(500).json({error: "There was an error adding a new project" })
        })
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error: "you fucked up somewhere along the line" })
    }
})

  module.exports = router;