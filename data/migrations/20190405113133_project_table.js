exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(projects) {
      projects.increments();
  
      projects.string('name', 128).notNullable();
      projects.text('description').notNullable();
      projects.boolean('completed').defaultTo(false);
    });
    //   .createTable('recipes', tbl => {
    //     // the dishes table must be created before this table is created
    //     tbl.increments();
  
    //     tbl
    //       .string('name', 128)
    //       .notNullable()
    //       .unique();
  
    //     tbl
    //       .integer('dishes_id')
    //       .unsigned()
    //       .notNullable()
    //       .references('id')
    //       .inTable('dishes')
    //       .onDelete('CASCADE')
    //       .onUpdate('CASCADE');
    //   })
    //   .createTable('ingredients', tbl => {
    //     tbl.increments();
  
    //     tbl.string('name', 128).notNullable();
    //   })
    //   .createTable('recipes_ingredients', tbl => {
    //     // the recipes and ingredients tables must be created before this table is created
    //     tbl.increments();
  
    //     tbl
    //       .integer('recipes_id')
    //       .unsigned()
    //       .notNullable()
    //       .references('id')
    //       .inTable('recipes')
    //       .onDelete('CASCADE')
    //       .onUpdate('CASCADE');
  
    //     tbl
    //       .integer('ingredients_id')
    //       .unsigned()
    //       .notNullable()
    //       .references('id')
    //       .inTable('ingredients')
    //       .onDelete('CASCADE')
    //       .onUpdate('CASCADE');
    //   });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };