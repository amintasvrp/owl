"use strict";

//Importando modelos
const AuthController = use("App/Controllers/Managers/AuthController");

class AuthHttpController {
  // Cadastrando usuário
  async register({ request }) {
    const data = request.only(["username", "email", "password"]);
    const user = await AuthController.register(data);
    return user;
  }

  // Autenticando usuário
  async authenticate({ request, auth }) {
    const { email, password } = request.all();
    const token = AuthController.authenticate(email, password, auth);
    return token;
  }
}

module.exports = AuthHttpController;
