var App = angular.module("Calculator", []);

App.controller('OperationCtrl', function($scope, OperationsSvc, CalculatorSvc){

  $scope.operations = OperationsSvc.operations;

  $scope.operation = $scope.operations[0];

  $scope.value = '0';

  $scope.applied = false;

  $scope.steps = [];

  $scope.result = 0;

  function resetValues() {
    $scope.value = 0;
    $scope.operation = $scope.operations[0];
    $scope.steps = [];
    $scope.applied = false;
  }

  $scope.addStep = function() {
    var step = {};
    step.operation = $scope.operation.name;
    step.operand = $scope.value;
    if(step.operation === 'Apply') {
      $scope.applied = true;
    }
    $scope.steps.push(step);
    $scope.value = 0;
  }

  $scope.reset = function() {
    $scope.value = 0;
    resetValues();
  }

  $scope.calculate = function() {
    var array = $scope.steps;
    $scope.result = CalculatorSvc.calculate(array);
    resetValues();
  }
});

App.factory('OperationsSvc', function() {
  var operations = [
    {name: 'Add'},
    {name: 'Subtract'},
    {name: 'Multiply'},
    {name: 'Divide'},
    {name: 'Apply'}
  ];
  return {
    operations : operations
  }
});

App.factory('CalculatorSvc', function(){
  return {
    calculate : function(array) {
      var start = array.pop().operand;
      array.map(function(item){
        if(item.operation === 'Add') {
          start = start + item.operand;
          return start;
        } else if(item.operation === 'Subtract') {
          start = start - item.operand;
          return start;
        } else if(item.operation === 'Divide') {
          start = start / item.operand;
          return start;
        } else if(item.operation === 'Multiply') {
          start = start * item.operand;
          return start;
        }
      });
      return start;
    }
  }
});
