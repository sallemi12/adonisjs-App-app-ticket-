'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
   // users table migration showing only the up() schemas with our modifications
this.create('users', table => {
    table.increments()
    table.string('username', 80).notNullable().unique()
    table.string('email', 254).notNullable().unique()
    table.string('password', 60).notNullable()
    table.integer('is_admin').unsigned().default(0);
    table.timestamps()
})
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
