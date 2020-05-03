describe("Learn - All method", function(){

    function Calc(a,b,c){
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);

        element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(val){
        if(val==c)
        {
            item.click();
        }
            })
        })
        

        element(By.id("gobutton")).click();
    }
    
        it("All",function(){
        
            browser.get("https://juliemr.github.io/protractor-demo/");
        
            Calc(2,3, "ADDITION");
            Calc(12,3,"DIVISION");
            Calc(12,9,"SUBTRACTION");
            Calc(1,2,"MULTIPLICATION");
        
            element.all(by.repeater("result in memory")).each(function(item){
                item.element(by.css("td:nth-child(3)")).getText().then(function(txt){
                    console.log(txt);
                })
            })
        

        })
        
        })