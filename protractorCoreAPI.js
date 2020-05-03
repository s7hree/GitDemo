describe("Learn protractor core API",function(){

it("repeater, chain locator, css for identical tags",function(){

browser.get("https://juliemr.github.io/protractor-demo/");

element(by.model("first")).sendKeys("3");
element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
element(by.model("second")).sendKeys("5");
element(By.id("gobutton")).click();

element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(txt){
    console.log(txt);
});

})

})