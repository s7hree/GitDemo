describe('Synchronization Demo...',function(){
	
	it('Synchronization practice',function(){
        
        browser.manage().window().maximize();   //Always recommended - maximize the browser.
        browser.waitForAngularEnabled(false);   //Non-angular website
        browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");

        element(by.css("a[href*='loadAjax()']")).click();

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.id('loader'))),10000);

        element(by.id("results")).getText().then(function(txt){
            console.log(txt);
        })
            
    })
	
})