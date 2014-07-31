describe('CalculatorService', function(){
  var calculator;

  beforeEach(function(){
    module('Calculator');
  });

  beforeEach(inject(function(CalculatorSvc){
    calculator = CalculatorSvc;
  }));

  it('should calculate result', function(){
    var input = [{ operation: 'Add', operand: 3 }, { operation: 'Apply', operand: 2 }];
    expect(calculator.calculate(input)).toBe(5);
  });
});
