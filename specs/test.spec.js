var assert = require ('assert');
var expect = require('chai').expect;
var expensePage = require ('../pageobjects/test.page');
var user;


describe ('it should correctly open Expense Tracker site', function(){

	it ('should open the right page', function(){
		browser.url('/');
		var title= browser.getTitle();
		assert.equal(title, 'Expense tracker');
	});

});

describe ('registration new users', function(){

	it ('should register a new user', function(){
		browser.url('/');
		expensePage.registerLink.click();
		user= expensePage.getUserName();
		expensePage.usernameField.setValue(user);
		expensePage.regPass1.setValue('password');
		expensePage.regPass2.setValue('password');
		expensePage.registerButton.click();
		assert.equal(expensePage.editAccountLink.getText(), user);
	});

});
	
describe ('it should login', function(){

	it ('should not allow to log in with invalid credentials', function(){
		browser.url('/');
		expensePage.usernameField.setValue('anatest88');
		expensePage.passwordField.setValue('anatest88');
		expensePage.loginButton.click();
		expect (expensePage.wrongUserPassMessage.getText()).to.equal('unknown login or wrong password');

	});

	it ('should login with valid credentials', function(){
		browser.url('/');
		expensePage.usernameField.setValue(user);
		expensePage.passwordField.setValue('password');
		expensePage.loginButton.click();
		expensePage.verifyListExpensesText();

	});

 });

describe ('it should correctly manage expenses and categories', function(){

	it ('should add a new category',function(){
		browser.url('/');
		expensePage.categoryLink.click();
		expensePage.addCategoryLink.click();
		expensePage.categoryField.setValue('Food');
		expensePage.createCategoryButton.click();
		expensePage.verifyCategoryWithNameCreated('Food');

	});

	it ('should add a new expense', function(){
		browser.url('/');
		expensePage.addExpenseLink.click();
		expensePage.dayField.setValue('1');
		expensePage.monthField.setValue('1');
		expensePage.yearField.setValue('2017');
		expensePage.amountField.setValue('10');
		expensePage.reasonField.setValue('dinner');
		expensePage.createExpenseButton.click();
		expensePage.verifyExpenseCreated('01.01.17', 'Food', '10,00 €', 'dinner');

	});

});

describe ('it should correctly display the right title', function(){
	
	it ('should display Add Expense title', function(){
		browser.url('/');
		expensePage.addExpenseLink.click();
		expensePage.verifyAddExpenseTitleisDisplayed();

	});

	it ('should display List Expenses title', function(){
		browser.url('/');
		expensePage.listExpensesLink.click();
		expensePage.verifyListExpensesTitleisDisplayed();

	});

	it ('should display List Categories title', function(){
		browser.url('/');
		expensePage.categoryLink.click();
		expensePage.verifyCategoryTitleisDisplayed();

	});

	it ('should display Test Statistics title', function(){
		browser.url('/');
		expensePage.statisticsLink.click();
		expensePage.verifyStatisticsTitleisDisplayed();

	});
});
