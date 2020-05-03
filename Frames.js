describe('Frames Demo...',function(){
	
	it('Frames practice',function(){
        
        browser.manage().window().maximize();   //Always recommended - maximize the browser.
        browser.waitForAngularEnabled(false);   //Non-angular website
        browser.get("https://rahulshettyacademy.com/AutomationPractice/");
        
        browser.switchTo().frame(element(by.css("iframe[name='iframe-name']")).getWebElement());    //switch to frame   
        element(by.css("a[href*='sign_in']")).getText().then(function(text){
            console.log(text);
        })
    
    })
	
})