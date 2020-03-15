"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

//Importando controller
const TweetPersistenceController = use(
  "App/Controllers/Persistence/TweetPersistenceController"
);

/**
 * Resourceful controller for interacting with tweets
 */
class TweetController {
  /**
   * Show a list of all tweets.
   */
  static async index() {
    const tweets = await TweetPersistenceController.index();
    return tweets;
  }

  /**
   * Create/save a new tweet.
   */
  static async store(userId, content) {
    const data = {
      userId: userId,
      content: content
    };
    const tweet = await TweetPersistenceController.store(data);
    return tweet;
  }

  /**
   * Display a single tweet.
   */
  static async show(tweetId) {
    const tweet = await TweetPersistenceController.show(tweetId);
    return tweet;
  }

  /**
   * Update tweet details.
   */
  static async update(tweetId, content) {
    const tweet = await TweetPersistenceController.update(tweetId, content);
    return tweet;
  }

  /**
   * Delete a tweet with id.
   */
  static async destroy(tweetId, auth, response) {
    let tweet = await TweetPersistenceController.show(tweetId);
    //Issue for AdonisJs
    const userId = auth._authenticatorsPool.jwt._instanceUser._id;
    if (tweet.userId != userId) return response.status(401);
    tweet = await TweetPersistenceController.destroy(tweetId);
    return tweet;
  }
}

module.exports = TweetController;
