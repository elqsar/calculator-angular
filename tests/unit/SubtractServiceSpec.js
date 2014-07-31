describe('SubtractService', function(){
  var sub;
  beforeEach(function(){
    module('Calculator');
  });

  beforeEach(inject(function(SubtractSvc){
    sub = SubtractSvc;
  }));

  it('service should exists', function(){
    expect(sub).toBeDefined();
  });

  it('should subtract two numbers', function(){
    expect(sub.apply(7, 2)).toBe(5);
  });
});
