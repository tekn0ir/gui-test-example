'use strict';

var {After, AfterAll} = require('cucumber');
var fs = require('fs');
var path = require('path');
var sanitize = require("sanitize-filename");


After(function(scenarioResult) {
    if(scenarioResult.status === 'failed') {
        this.driver.takeScreenshot().then(function(data){
            var base64Data = data.replace(/^data:image\/png;base64,/,"");
            fs.writeFile(path.join('screenshots', sanitize(scenarioResult.scenario.name + ".png").replace(/ /g,"_")), base64Data, 'base64', function(err) {
                if(err) console.log(err);
            });
        });
    }
    return this.driver.quit();
});
