describe('Finding elements using Protractor', function(){
    var obj = require("./jsobjectdemo.js");
    var using = require('jasmine-data-provider');
    var d = require("./data.js");

    beforeEach(function(){
        obj.getURL();
    })

    afterEach(function(){
        console.log("Test is completed in develop branch - new file.....");
    })

    //data stores atual data, description stores sub-object name.
    //For every iteration, one data set is picked.
    using(d.datadriven, function (data, description) {
    it('Different locators'+description, function(){
        
obj.firstInput.sendKeys(data.firstInput);   //'K' is capital letter in 'sendKeys'.
obj.secondInput.sendKeys(data.secondInput).then(function(){
    browser.sleep(5000);
}); //.then is used because browser.sleep is not synchronized by protractor. Sleep is added to as protractor is too fast.

obj.goButton.click();

//Here we want to retrieve value from browser, so real output will display only when you resolve the promise.
//To resolve promise, we need to use then function.
//So, this will not work - console.log(element(by.css("h2[class='ng-binding']")).getText()); - This will print prmoise as output.
//In below line, getText wil retrive value and put it as an argument in function (text1) in then().

//Assertion: expect-tobe is jasmine concept. Jasmine takes care of resolving promises.
expect(obj.output.getText()).toBe(data.result);

obj.output.getText().then(function(text1){
console.log(text1)
});  //CSS Syntax: Tagname[attribute='value']

    })
})
})