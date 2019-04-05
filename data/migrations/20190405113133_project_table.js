exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(projects) {
      projects.increments();
  
      projects.string('name', 128).notNullable();
      projects.text('description').notNullable();
      projects.boolean('completed').defaultTo(false);
    })
    .createTable('actions', function(actions) {
        actions.increments();
    
        actions
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    
        actions.string('description', 128).notNullable();
        actions.text('notes').notNullable();
        actions.boolean('completed').defaultTo(false);
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('actions')
  };