Calculator.factory('ServiceFactory', function(AddSvc, SubtractSvc, MultiplySvc, DivideSvc){
  return {
    'Add' : AddSvc,
    'Subtract' : SubtractSvc,
    'Multiply' : MultiplySvc,
    'Divide' : DivideSvc
  };
});
