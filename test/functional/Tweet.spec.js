"use strict";

const { test, trait } = use("Test/Suite")("TweetTest");
const TweetController = use("App/Controllers/Managers/TweetController");

trait("Test/ApiClient");

const { timeout } = use("Test/Runner");

var user = {};
var authorization = "";
var tweet = {};

//Issue from AdonisJs
const getBody = response => JSON.parse(response._res.res.text);

test("Store a tweet", async ({ assert, client }) => {
  let response = await client
    .post("/register")
    .send({
      username: "amintasvrp",
      email: "amintas@gmail.com",
      password: "123456"
    })
    .end();

  user = getBody(response);

  response = await client
    .post("/authenticate")
    .send({
      email: "amintas@gmail.com",
      password: "123456"
    })
    .end();

  const { token } = getBody(response);

  authorization = "Bearer " + token;

  const content = "Bad tweet";

  response = await client
    .post("/tweets")
    .header("Authorization", authorization)
    .send({
      content
    })
    .end();

  tweet = getBody(response);

  assert.equal(tweet.userId, user._id, "Wrong userId");
  assert.equal(tweet.content, content, "Wrong content");
}).timeout(0);

test("Index tweets", async ({ assert, client }) => {
  let response = await client
    .get("/tweets")
    .header("Authorization", authorization)
    .end();

  const tweetsList = getBody(response);

  assert.equal(tweetsList.length, 1, "Wrong index response");
}).timeout(0);

test("Show tweet", async ({ assert, client }) => {
  let response = await client
    .get("/tweets/" + tweet._id)
    .header("Authorization", authorization)
    .end();

  const shownTweet = getBody(response);

  assert.equal(tweet.id, shownTweet.id, "Wrong show response");
}).timeout(0);

test("Update tweet", async ({ assert, client }) => {
  const content = "Good tweet";

  let response = await client
    .put("/tweets/" + tweet._id)
    .header("Authorization", authorization)
    .send({
      content
    })
    .end();

  const editedTweet = getBody(response);

  assert.equal(tweet.id, editedTweet.id, "Wrong show response");
  assert.equal(editedTweet.content, content, "Wrong show response");
}).timeout(0);

test("Delete tweets", async ({ assert, client }) => {
  let response = await client
    .delete("/tweets/" + tweet._id)
    .header("Authorization", authorization)
    .end();

  const shownTweet = getBody(response);

  assert.equal(tweet.id, shownTweet.id, "Wrong show response");

  response = await client
    .get("/tweets")
    .header("Authorization", authorization)
    .end();

  const tweetsList = getBody(response);

  assert.equal(tweetsList.length, 0, "Wrong index response");
}).timeout(0);
