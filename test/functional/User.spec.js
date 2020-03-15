"use strict";

const { test, trait } = use("Test/Suite")("UserTest");
const AuthController = use("App/Controllers/Managers/AuthController");

trait("Test/ApiClient");

const { timeout } = use("Test/Runner");

// Issue from AdonisJs
const getBody = response => JSON.parse(response._res.res.text);

test("Register an user", async ({ assert, client }) => {
  const data = {
    username: "amintasvrp",
    email: "amintas@gmail.com",
    password: "123456"
  };

  const response = await client
    .post("/register")
    .send(data)
    .end();

  const user = getBody(response);

  assert.equal(user.username, data.username, "User was not registered");
}).timeout(0);

test("Authenticate an user", async ({ assert, client }) => {
  const data = {
    email: "amintas@gmail.com",
    password: "123456"
  };

  let response = await client
    .post("/authenticate")
    .send(data)
    .end();

  const { type, token } = getBody(response);

  assert.equal(type, "bearer", "JWT not guaranteed");
  assert.notEqual(token, undefined, "Token invalid");

  response = await client
    .get("/app")
    .header("Authorization", "Bearer " + token)
    .end();

  const { message } = getBody(response);

  assert.equal(message, "Hello World", "Permission not guaranteed");
});
