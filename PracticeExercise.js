describe('PracticeExercise',function(){
	
	function selectItems(product){
		element.all(by.tagName("app-card")).each(function(item){
			item.element(by.css("h4 a")).getText().then(function(text1){
				if(text1==product)
				{
					item.element(by.css("button[class*='btn-info']")).click();
				}
			})
			
		})
	}

	function checkTotal(){
		var total = 0;
                
        element.all(by.css("tbody tr")).each(function (item) {
            item.element(by.css("td:nth-child(4)")).getText().then(function (text) {
                var txt = text.split(" ");
                var amt = Number(txt[1]);
                console.log("Rows.."+text);
				if (Number.isInteger(amt)==true){
				total = total + amt;}
            });
        });
        element(by.css("h3 strong")).getText().then(function (text) {
            var txt = text.split(" ");
            var amt = Number(txt[1]);
            console.log("Total.."+text);
            console.log("amt is " + amt + " and total is " + total)
            expect(amt == total);
        });
    }
	

	it('PracticeExercise...',function(){
		
		browser.manage().window().maximize();   
        browser.get("https://rahulshettyacademy.com/angularpractice/");
        
		element(by.name("name")).sendKeys("Shree");
		element(by.css("input[name='email']")).sendKeys("s@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password");
		element(by.id("exampleCheck1")).click();
		//element(by.css("select[id='exampleFormControlSelect1']")).element(by.css("option:nth-child(2)")).click();
		element(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Female")).click();	//'cssContainingText' takes two arguments - one is path and second is text to filter out element
		element.all(by.name("inlineRadioOptions")).get(1).click();	//index starts at 0 for 'get' here.
		element(by.css("input[name='bday']")).sendKeys("06/07/1990");
		element(by.buttonText("Submit")).click();	//buttonText - Find a button by text.
		element(by.css("div[class*='success alert']")).getText().then(function(txt){
			console.log(txt);
		})

		element(by.name("name")).clear();	//clears editbox
		element(by.name("name")).sendKeys("S").then(function(){
			element(by.css("div[class='alert alert-danger']")).getText().then(function(txt1){
				console.log(txt1);
			})
		});


		element(by.linkText("Shop")).click();	//linkText - Locates link elements whose visible text matches the given string.

		selectItems("Samsung Note 8");
		selectItems("Nokia Edge");		
		selectItems("Nokia Edge");
		selectItems("Blackberry");
		selectItems("Blackberry");
		selectItems("Blackberry");

		element(by.partialLinkText("Checkout")).getText().then(function(text2){
			var res = text2.split("(");	//splits from the provided character.
			expect(res[1].trim().charAt(0)).toBe("6");
		})

		element(by.partialLinkText("Checkout")).click();

		checkTotal();
		
	})

})