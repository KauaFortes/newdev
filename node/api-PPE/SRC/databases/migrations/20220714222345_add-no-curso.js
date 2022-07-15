/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.up = function(knex) {
 return knex.schema.alterTable('bookcase', function(table) {
   table.
   integer('authorID') // tipo do campo (nome do campo)
   .unsigned() // precisa sernumero inteiro
   .notNullable() // não pode ser nulo
   .references('id') // referencia do coampo da tabela pai
   .inTable('authors') // nome da tabela pai
   .onDelete('CASCADE') // executa um comando quando o registro pai for removido 
 })
 
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
 return knex.schema.alterTable('authors', function(table) {
   table.dropForeign('authorID')
   table.dropColumn('authorID')
 })
};