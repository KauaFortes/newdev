/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('aulasCase', function(table) {
    table.increments()
    table.string('nameTitulo')
    table.string('nameDescri')
    table.string('nameLink')
    table.string('nameProf')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('aulasCase')
};
