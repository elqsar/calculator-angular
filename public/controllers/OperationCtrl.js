Calculator.controller('OperationCtrl', function(OperationsSvc, CalculatorSvc){
  var vm = this;

  vm.operations = OperationsSvc.operations;
  vm.operation = vm.operations[0];
  vm.value = '0';
  vm.applied = false;
  vm.steps = [];
  vm.result = 0;

  function resetValues() {
    vm.value = 0;
    vm.operation = vm.operations[0];
    vm.steps = [];
    vm.applied = false;
  }

  vm.addStep = function() {
    var step = {};
    step.operation = vm.operation.name;
    step.operand = vm.value;
    if(step.operation === 'Apply') {
      vm.applied = true;
    }
    vm.steps.push(step);
    vm.value = 0;
  }

  vm.reset = function() {
    vm.value = 0;
    resetValues();
  }

  vm.calculate = function() {
    var array = vm.steps;
    vm.result = CalculatorSvc.calculate(array);
    resetValues();
  }
});
