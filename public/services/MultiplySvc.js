Calculator.factory('MultiplySvc', function(){
  return {
    apply : apply
  }

  function apply(first, second) {
    return first * second;
  };
});
