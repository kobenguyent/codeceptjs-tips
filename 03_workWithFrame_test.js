
Feature('Working with frames');

Scenario('switching frame', (I) => {
    I.amOnPage('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
    I.switchTo('iframe');
    // There are more iframes inside an iframe
    I.switchTo('iframe');
    I.see('We use cookies to understand how you use our site and to improve your experience.')
});
