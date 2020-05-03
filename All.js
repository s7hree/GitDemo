describe("Learn - All method", function(){

it("All",function(){

    browser.get("https://juliemr.github.io/protractor-demo/");

    element(by.model("first")).sendKeys("3");
    element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    element(by.model("second")).sendKeys("5");
    element(By.id("gobutton")).click();

    element(by.model("first")).sendKeys("10");
    element(by.model("operator")).element(by.css("option:nth-child(5)")).click();
    element(by.model("second")).sendKeys("5");
    element(By.id("gobutton")).click();

    element.all(by.repeater("result in memory")).count().then(function(cnt){
        console.log(cnt);
    });

    element.all(by.repeater("result in memory")).each(function(item){
        item.element(by.css("td:nth-child(3)")).getText().then(function(txt){
            console.log(txt);
        })
    })

})

})