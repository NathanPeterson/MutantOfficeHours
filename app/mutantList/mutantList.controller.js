(function(){
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

    function MutantListController(){
      var vm = this;

      vm.addMutant = addMutant;

      vm.mutants = ['deadpool', 'gambit', 'nightcrawler'];
      vm.newMutant = new Mutant();

      function Mutant(){
        this.name = '';
        this.phoneNumber = '';
        this.topic = '';
        this.notified = false;
        this.complete = false;
      }

      function addMutant(){
        vm.mutants.push(vm.newMutant.name);
      }
    }
})();
