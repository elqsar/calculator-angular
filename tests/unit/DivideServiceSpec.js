describe('DivideService', function(){
  var div;
  beforeEach(function(){
    module('Calculator');
  });

  beforeEach(inject(function(DivideSvc){
    div = DivideSvc;
  }));

  it('service should exists', function(){
    expect(div).toBeDefined();
  });

  it('should multiply two numbers', function(){
    expect(div.apply(15, 3)).toBe(5);
  });
});
