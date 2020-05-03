//posse site does not exist now.
describe('Actions demo',function() {  


    it('Open Posse website',function() {
   
   
   //moving the mouse into that textbox
    //sendkeys
    //keyboard arrow down
    //Keyboard enter
    browser.get("https://posse.com/");
    element(by.model("userInputQuery")).sendKeys("river");
    browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
   
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
    {
   
    browser.sleep(2000);
   
    //css with regular expressions (*= - contains)
    expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
   
    element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
    element(by.css("a[ng-href*='London/River Island']")).click();
    
    //Get window handles to switch to new window opened because of last click. Index 0 here will be parent window and Index 1 will be first child window.
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handle[1]);
            browser.getTitle().then(function(ChildTitle){
                console.log(ChildTitle);

                browser.switchTo().window(handle[0]);
                browser.getTitle().then(function(ParentTitle){
                    console.log(ParentTitle);
    
            })
        })

    })
   
    })
   })