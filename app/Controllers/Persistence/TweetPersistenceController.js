"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

//Importando modelos
const Tweet = use("App/Models/Tweet");

/**
 * Resourceful controller for interacting with tweets
 */
class TweetPersistenceController {
  /**
   * Show a list of all tweets.
   */
  static async index() {
    const tweets = await Tweet.find({});
    return tweets;
  }

  /**
   * Create/save a new tweet.
   */
  static async store(data) {
    const tweet = await new Tweet(data).save();
    return tweet;
  }

  /**
   * Display a single tweet.
   */
  static async show(tweetId) {
    const tweet = await Tweet.findById(tweetId);
    return tweet;
  }

  /**
   * Update tweet details.
   */
  static async update(tweetId, content) {
    await Tweet.findByIdAndUpdate(tweetId, { content });
    return this.show(tweetId);
  }

  /**
   * Delete a tweet with id.
   * DELETE tweets/:id
   */
  static async destroy(tweetId) {
    const tweet = await Tweet.findByIdAndRemove(tweetId);
    return tweet;
  }
}

module.exports = TweetPersistenceController;
