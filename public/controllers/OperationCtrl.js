Calculator.controller('OperationCtrl', OperationCtrl);

// minification safe dependencies
OperationCtrl.$inject['OperationsSvc', 'CalculatorSvc'];

function OperationCtrl(OperationsSvc, CalculatorSvc){
  var vm = this; // view model

  vm.operations = OperationsSvc.operations;
  vm.operation = vm.operations[0];
  vm.value = '0';
  vm.applied = false;
  vm.steps = [];
  vm.result = 0;

  vm.addStep = addStep;

  vm.reset = reset;

  vm.calculate = calculate;

  /// functions

  function reset() {
    vm.value = 0;
    resetValues();
  };

  function calculate() {
    var array = vm.steps;
    vm.result = CalculatorSvc.calculate(array);
    resetValues();
  };

  function addStep() {
    var step = {};
    step.operation = vm.operation.name;
    step.operand = vm.value;
    if(step.operation === 'Apply') {
      vm.applied = true;
    }
    vm.steps.push(step);
    vm.value = 0;
  };

  function resetValues() {
    vm.value = 0;
    vm.operation = vm.operations[0];
    vm.steps = [];
    vm.applied = false;
  };
}
