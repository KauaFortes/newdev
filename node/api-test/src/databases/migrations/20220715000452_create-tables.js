/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
  await knex.schema.createTable('instructor', function(t) {
    t.increments();
    t.string('fullName');
    t.string('avatarUrl');
  });

  await knex.schema.createTable('courses', function(t) {
    t.increments();
    t.string('title');
    t.string('description');
  });

  return knex.schema.createTable('lessons', function(t) {
    t.increments();
    t.string('title');
    t.string('description');
    t.string('videoId');
    t.integer('instructorId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('instructor')
      .onDelete('CASCADE');
    t.integer('courseId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('courses')
      .onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
