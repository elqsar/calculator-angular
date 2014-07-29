Calculator.factory('CalculatorSvc', function(ServiceFactory){
  return {
    calculate : function(array) {
      var start = array.pop().operand;
      array.map(function(item){
        start = ServiceFactory[item.operation].apply(start, item.operand);
        return start;
      });
      return start;
    }
  }
});
