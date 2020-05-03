var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
//seleniumAddress: 'http://localhost:4444/wd/hub',
directconnect:true,
  specs: ['ElementBasics.js'],
 
  onPrepare: function()
  {
    browser.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
  },

  suites:
  {
    Smoke: ['Dropdowns.js','jsobjectdemo2.js','Alerts.js']
  },

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};