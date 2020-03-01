'use strict'

//Importando modelos
const UserPersitenceController = use('App/Controllers/Persistence/UserPersistenceController');

class AuthController {
  // Cadastrando usuário
  static async register(data){
    return await UserPersitenceController.register(data);
  }

  // Autenticando usuário
  static async authenticate(email, password, auth){
    return await auth.attempt(email, password);
  }
}

module.exports = AuthController