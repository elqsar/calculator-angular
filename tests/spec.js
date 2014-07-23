describe('Calculator Problem', function() {

  beforeEach(function(){
    browser.get('http:127.0.0.1:3000');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Calculator problem');
  });

  it('should have all operations', function(){
    var allOptions = element.all(by.options('item.name for item in operations'));
    expect(allOptions.count()).toEqual(5);
  });

  it('should add one input step', function(){
    var input = element(by.model('value'));
    input.sendKeys('2');
    expect(input.getAttribute('value')).toBe('2');
  });

  it('should add one input step', function(){
    var input = element(by.model('value'));
    input.sendKeys('2');
    var button = element(by.buttonText('Add step'));
    button.click();
    var items = element(by.css('.jumbotron')).all(by.tagName('li'));
    expect(items.count()).toEqual(1);
  });

  it('reset should clear all steps', function(){
    var input = element(by.model('value'));
    input.sendKeys('2');
    var button = element(by.buttonText('Add step'));
    button.click();
    var reset = element(by.buttonText('Reset'));
    reset.click();
    var items = element(by.css('.jumbotron')).all(by.tagName('li'));
    expect(items.count()).toEqual(0);
  });

  it('calculate should return right value', function(){
    element(by.cssContainingText('option', 'Multiply')).click();
    var input = element(by.model('value'));
    input.sendKeys('3');
    var button = element(by.buttonText('Add step'));
    button.click();
    element(by.cssContainingText('option', 'Apply')).click();
    input.sendKeys('5');
    button.click();
    var calculate = element(by.buttonText('Calculate'));
    calculate.click();
    var result = element(by.css('.result'));
    expect(result.getText()).toBe('15');
  });
});
