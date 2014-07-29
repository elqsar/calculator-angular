Calculator.factory('OperationsSvc', function() {
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
