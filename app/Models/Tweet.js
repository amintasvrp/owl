"use strict";

const BaseModel = use("MongooseModel");
const mongoose = use("Adonis/Addons/Mongoose");
const { Schema } = mongoose;

class Tweet extends BaseModel {
  static boot({ schema }) {
    super.boot(schema);
  }

  static get schema() {
    return new Schema({
      userId: String,
      content: { type: String, maxlenght: 240 }
    });
  }
}

module.exports = Tweet.buildModel("Tweet");
