'use strict'

//Importando modelos
const User = use('App/Models/User');

class UserPersistenceController {
  // Cadastrando usuário
  static async register(data){
    const user = await new User(data).save();
    return user;
  }

  static async drop() {
    User.remove({});
  }
}

module.exports = UserPersistenceController