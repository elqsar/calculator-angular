describe('AddService', function(){
  var add;
  beforeEach(function(){
    module('Calculator');
  });

  beforeEach(inject(function(AddSvc){
    add = AddSvc;
  }));

  it('service should exists', function(){
    expect(add).toBeDefined();
  });

  it('should add two numbers', function(){
    expect(add.apply(2, 3)).toBe(5);
  });
});
