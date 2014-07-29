Calculator.controller('OperationCtrl', function($scope, OperationsSvc, CalculatorSvc){

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
