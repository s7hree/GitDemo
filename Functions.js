describe("Learn - All method", function(){

function Add(a,b){
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);
    element(By.id("gobutton")).click();
}

    it("All",function(){
    
        browser.get("https://juliemr.github.io/protractor-demo/");
    
        Add(2,3);
        Add(5,3);
        Add(2,7);
        Add(2,9);
    
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