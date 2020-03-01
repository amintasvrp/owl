'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('Adonis/Addons/Mongoose')
const { Schema } = mongoose;


class User extends BaseModel {
  static boot ({ schema }) {
    super.boot(schema);

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('preSave', 'UserHook.hashPassword');
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  static get schema () {
    return new Schema({
      username: String,
      email: String,
      password: String
    });
  }
}

module.exports = User.buildModel('User');
