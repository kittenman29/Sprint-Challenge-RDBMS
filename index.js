const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./routers/projects-router.js');
// const studentsRouter = require('./routers/students-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);