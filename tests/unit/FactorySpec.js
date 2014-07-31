describe('FactoryService', function(){
  var factory;
  beforeEach(function(){
    module('Calculator');
  });

  beforeEach(inject(function(ServiceFactory){
    factory = ServiceFactory;
  }));

  it('service should exists', function(){
    expect(factory).toBeDefined();
  });

  it('should return service with apply method', function(){
    var result = factory['Add'];
    expect(typeof result.apply).toBe('function');
    expect(result.apply(2, 3)).toBe(5);
  });
});
