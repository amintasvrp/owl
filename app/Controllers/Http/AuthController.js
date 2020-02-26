'use strict'

//Importando modelos
const User = use('App/Models/User');

class AuthController {
  // Cadastrando usuário
  async register({ request }){
    const data = request.only(['username', 'email', 'password']);
    const user = await User.create(data);
    return user;
  }

  // Autenticando usuário
  async authenticate({ request, auth }){
    const {email, password} = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }
}

module.exports = AuthController
