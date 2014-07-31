describe('MultiplyService', function(){
  var mult;
  beforeEach(function(){
    module('Calculator');
  });

  beforeEach(inject(function(MultiplySvc){
    mult = MultiplySvc;
  }));

  it('service should exists', function(){
    expect(mult).toBeDefined();
  });

  it('should multiply two numbers', function(){
    expect(mult.apply(3, 5)).toBe(15);
  });
});
