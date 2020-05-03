function car(){
    this.firstInput=element(by.model("first"));
    this.secondInput=element(by.model("second"));
    this.goButton=element(By.id("gobutton"));
    this.output=element(by.css("h2[class='ng-binding']"));

this.getURL=function(){
    browser.get("https://juliemr.github.io/protractor-demo/");    
}

    this.colour="red";
    this.engine="turbo";
    this.brand="bmw"

    this.getModel=function(){
        console.log("this is 2020 model.");
    };

};

module.exports = new car(); //export object so other files in this project cna use it.

//var a = new car();
//a.getModel();
//console.log(a.engine);