(function(){
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

    MutantListController.$inject = ['$firebaseArray']
    function MutantListController($firebaseArray){
      var vm = this;
      var fireMutantRef = new Firebase('https://mutant-school.firebaseio.com/')
      vm.addMutant = addMutant;

      vm.mutants = $firebaseArray(fireMutantRef);
      vm.newMutant = new Mutant();

      function Mutant(){
        this.name = '';
        this.phoneNumber = '';
        this.topic = '';
        this.notified = false;
        this.complete = false;
      }

      function addMutant(){
        vm.mutants.$add(vm.newMutant.name);
      }
    }
})();
