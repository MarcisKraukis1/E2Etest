// spec.js
describe('Login E2E test', function() {
 it('go to sign up and fail', function() {
    browser.get('https://angularjs.realworld.io/#/');
    browser.element(by.partialLinkText('Sign up')).click();
    browser.driver.sleep(2000);
    browser.findElement(by.model('$ctrl.formData.username')).sendKeys('Marcis'); 
    browser.findElement(by.model('$ctrl.formData.email')).sendKeys('Marcis@'); 
    browser.findElement(by.model('$ctrl.formData.password')).sendKeys('Marcis123'); 
    browser.findElement(by.buttonText('Sign up')).click();
    browser.driver.sleep(2000);
    browser.findElement(by.model('$ctrl.formData.email')).clear();
    browser.findElement(by.model('$ctrl.formData.email')).sendKeys('kraukis@gmail.com');
    browser.driver.sleep(2000);
    browser.findElement(by.model('$ctrl.formData.password')).clear();
    browser.findElement(by.model('$ctrl.formData.password')).sendKeys('Marcis123');
    browser.findElement(by.buttonText('Sign up')).click();
    browser.driver.sleep(2000);
  })
 it('Sign in correctly', function(){
  browser.element(by.partialLinkText('Sign in')).click();
  browser.driver.sleep(2000);
  browser.findElement(by.model('$ctrl.formData.email')).sendKeys('kraukis@gmail.co');
  browser.findElement(by.model('$ctrl.formData.password')).sendKeys('Marcis12');
  browser.findElement(by.buttonText('Sign in')).click();
  browser.driver.sleep(2000);
  browser.findElement(by.model('$ctrl.formData.email')).clear();
  browser.findElement(by.model('$ctrl.formData.email')).sendKeys('kraukis@gmail.com');
  browser.findElement(by.model('$ctrl.formData.password')).clear();
  browser.findElement(by.model('$ctrl.formData.password')).sendKeys('Marcis123');
  browser.findElement(by.buttonText('Sign in')).click();
  browser.driver.sleep(2000);
 });
 it('add new article', function(){
  browser.element(by.partialLinkText('New Article')).click();
  browser.driver.sleep(2000);
  browser.findElement(by.model('$ctrl.article.title')).sendKeys('Test');
  browser.findElement(by.model('$ctrl.article.description')).sendKeys('Hello world');
  browser.findElement(by.model('$ctrl.article.body')).sendKeys('Test: Hello World');
  browser.findElement(by.model('$ctrl.tagField')).sendKeys('#world');
  browser.driver.sleep(2000);
  browser.findElement(by.buttonText('Publish Article')).click();
  browser.driver.sleep(2000);
 });
 it('edit article', function(){
  browser.element(by.partialLinkText('Marcis')).click();
  browser.driver.sleep(2000);
  browser.element(by.partialLinkText('Test', 'Hello world')).click();
  browser.driver.sleep(2000);
  browser.element(by.partialLinkText('Edit Article')).click();
  browser.driver.sleep(2000);
  browser.findElement(by.model('$ctrl.article.title')).clear();
  browser.findElement(by.model('$ctrl.article.title')).sendKeys('Test Article');
  browser.findElement(by.model('$ctrl.article.description')).clear();
  browser.findElement(by.model('$ctrl.article.description')).sendKeys('Hello world, lets start QA testing');
  browser.findElement(by.model('$ctrl.article.body')).clear();
  browser.findElement(by.model('$ctrl.article.body')).sendKeys('Test: Hello World, lets try protractor');
  browser.findElement(by.model('$ctrl.tagField')).clear();
  browser.findElement(by.model('$ctrl.tagField')).sendKeys('#world #QAtest');
  browser.findElement(by.buttonText('Publish Article')).click();
  browser.driver.sleep(3000);
 });
 it('Press like to some global articles', function(){
  browser.element(by.partialLinkText('Home')).click();
  browser.element(by.partialLinkText('Global Feed')).click();
  browser.element(by.css('[ng-click="$ctrl.submit()"]')).click();
  browser.driver.sleep(2000);
 });
 it('Delete article', function(){
  browser.element(by.partialLinkText('Marcis')).click();
  browser.element(by.partialLinkText('Test Article', 'Hello world, lets start QA testing')).click();
  browser.element(by.css('[ng-click="$ctrl.deleteArticle()"]')).click();
  browser.driver.sleep(2000);
 });
 it('Logout', function(){
  browser.element(by.partialLinkText('Settings')).click();
  browser.executeScript('window.scrollTo(0,10000);').then(function () {
    browser.driver.sleep(2000);
    browser.findElement(by.buttonText('Or click here to logout.')).click();
    browser.driver.sleep(2000);
});
   });
});