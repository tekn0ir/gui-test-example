'use strict';

var {Given, When, Then} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

When(/^I search Google for "([^"]*)"$/, function (searchQuery, next) {
    this.driver.get('http://www.google.com/webhp?complete=0');
    this.driver.findElement(By.name('q'))
        .sendKeys(searchQuery);
    this.driver.findElement(By.name('q'))
        .sendKeys(Key.ENTER)
        .then(function() {
            next();
        });
});

Then(/^I should see some results$/, function (next) {
    this.driver.wait(until.elementLocated(By.css('div.g')));
    this.driver.findElements(By.css('div.g'))
        .then(function(elements) {
            expect(elements.length).to.not.equal(0);
            next();
        });
});