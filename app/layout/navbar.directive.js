(function() {
  'use strict';

  angular
    .module('mutantApp.layout')
    .directive('xtNavbar', xtNavbar);

  function xtNavbar(){
    return {
      templateUrl:'app/layout/navbar.html',
      restrict: 'E',
      controller: NavBarController,
      controllerAs: 'vm',
    }
  }


  NavBarController.$inject= ['$state', 'authService'];

  function NavBarController($state, authService) {
    var vm =this;

    vm.logout =logout;
    vm.isLoggedIn = authService.isLoggedIn;

    function logout(){
      authService.logout();
      $state.go('home');
    }
  }
}());
