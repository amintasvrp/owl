'use strict'

class AppHttpController {

  // Teste da verificação da autenticação
  index(){
    return { message : "Hello World"};
  }

}

module.exports = AppHttpController