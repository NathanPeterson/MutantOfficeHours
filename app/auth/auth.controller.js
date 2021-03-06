(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authService'];

  function AuthController($state, authService) {
    var vm = this;

    vm.register = register;
    vm.login = login;

    vm.user = {
      email: '',
      password: ''
    }

    function register(user) {
      authService.register(user)
        .then(function() {
          vm.login(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    function login(user) {
      authService.login(user)
        .then(function(user) {
          $state.go('mutantList');
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
})();
