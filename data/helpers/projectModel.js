const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get: function(id) {
    let query = db('projects as p');

    if (id) {
      query.where('p.id', id).first();

      const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]

      return Promise.all(promises).then(function(results) {
        let [projects, actions] = results;
        projects.actions = actions;

        return mappers.projectToBody(projects);
      });
    }

    return query.then(projects => {
      return projects.map(projects => mappers.projectToBody(projects));
    });
  },
  getProjectActions: function(projectsId) {
    return db('actions')
      .where('project_id', projectsId)
      .then(actions => actions.map(actions => mappers.actionToBody(actions)));
  },
  insert: function(projects) {
    return db('projects')
      .insert(projects)
      .then(([id]) => this.get(id));
  },
  update: function(id, changes) {
    return db('projects')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  remove: function(id) {
    return db('projects')
      .where('id', id)
      .del();
  },
};