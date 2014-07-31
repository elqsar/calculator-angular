Calculator.factory('SubtractSvc', function(){
  return {
    apply : apply
  }

  function apply(first, second) {
    return first - second;
  };
});
