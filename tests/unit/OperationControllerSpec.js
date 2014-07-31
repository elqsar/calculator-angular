describe('OperationController', function(){
  var controller;

  beforeEach(function(){
    module('Calculator');
  });

  beforeEach(inject(function($controller){
    controller = $controller('OperationCtrl', {});
  }));

  it('controller should exists', function(){
    expect(controller).toBeDefined();
  });

  it('operations should not be empty', function(){
    expect(controller.operations).toBeDefined();
    expect(controller.operations.length).toBe(5);
  });

  it('steps should be empty', function(){
    expect(controller.steps).toBeDefined();
    expect(controller.steps.length).toBe(0);
  });

  it('step should be added', function(){
    expect(controller.steps.length).toBe(0);
    controller.operation = {name: 'Add', value: 5};
    controller.addStep();
    expect(controller.steps.length).toBe(1);
  });

  it('reset should clean up controller data', function(){
    expect(controller.steps.length).toBe(0);
    controller.operation = {name: 'Add', value: 5};
    controller.addStep();
    expect(controller.steps.length).toBe(1);
    controller.reset();
    expect(controller.value).toBe(0);
    expect(controller.steps.length).toBe(0);
  });


});
