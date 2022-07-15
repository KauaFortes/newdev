/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('cursoCase', function(table) {
    table.increments()
    table.string('namecurso')
    table.string('nameTitulo')
    table.string('nameDescri')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('cursoCase')
};
