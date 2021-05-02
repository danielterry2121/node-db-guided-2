
exports.up = function(knex) {
  return knex.schema.createTable("fruits", table =>{
      table.increments() //primary key
      table.text("name", 128).unique().notNullable() //next table 128 char limit etc.
      table.decimal("avgWeightOz")
      table.boolean("delicious")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("fruits")
};
