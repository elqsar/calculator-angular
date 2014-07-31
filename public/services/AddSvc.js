Calculator.factory('AddSvc', function(){
  return {
    apply : apply
  }

  function apply(first, second) {
    return first + second;
  };
});
