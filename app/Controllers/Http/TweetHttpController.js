"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

//Importando controller
const TweetController = use("App/Controllers/Managers/TweetController");

/**
 * Resourceful controller for interacting with tweets
 */
class TweetHttpController {
  /**
   * Show a list of all tweets.
   * GET tweets
   */
  async index() {
    const tweets = await TweetController.index();
    return tweets;
  }

  /**
   * Create/save a new tweet.
   * POST tweets
   */
  async store({ request, auth }) {
    const { content } = request.all();
    //Issue from AdonisJS
    const userId = auth._authenticatorsPool.jwt._instanceUser._id;
    const tweet = await TweetController.store(userId, content);
    return tweet;
  }

  /**
   * Display a single tweet.
   * GET tweets/:id
   */
  async show({ params }) {
    const tweet = await TweetController.show(params.id);
    return tweet;
  }

  /**
   * Update tweet details.
   * PUT or PATCH tweets/:id
   */
  async update({ params, request }) {
    const { content } = request.all();
    const tweet = await TweetController.update(params.id, content);
    return tweet;
  }

  /**
   * Delete a tweet with id.
   * DELETE tweets/:id
   */
  async destroy({ params, auth, response }) {
    const tweet = await TweetController.destroy(params.id, auth, response);
    return tweet;
  }
}

module.exports = TweetHttpController;
