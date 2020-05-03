describe('Alerts Demo...',function(){
	
	it('Alerts practice',function(){
        
        browser.waitForAngularEnabled(false);   //Non-angular website
        browser.get("https://rahulshettyacademy.com/AutomationPractice/");
        
        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().accept();    //clicks on 'OK' button in alert window.
        
        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().dismiss();    //clicks on 'Cancel' button in alert window.
	})
	
})