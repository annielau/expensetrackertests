var Page= require('./page')
var expect = require ('chai').expect;

var expensePage = Object.create(Page, {
	
	//menu links
	addExpenseLink: {get: function(){return browser.element('a#go_add_expense')}},
	listExpensesLink: {get: function(){return browser.element('a#go_list_expenses')}},
	categoryLink: {get: function(){return browser.element('a#go_list_categories')}},
	statisticsLink: {get: function(){return browser.element('a#go_show_statistics')}},
	editAccountLink:  {get: function(){return browser.element('[href=editaccount]')}}, 
	
	//registration
	registerLink: {get: function(){return browser.element('[href= "register.jsp"]')}},
	regPass1: {get: function(){return browser.element('input[id=password1]')}},
	regPass2: {get: function(){return browser.element('input[id=password2]')}},
	usernameField: {get: function(){return browser.element('input[id=login]')}},
	passwordField: {get: function(){return browser.element('input[id=password]')}},
	loginButton: {get: function(){return browser.element('input[id=submit]')}},
	listTitle: {get: function(){return browser.element('h1=List Expenses:')}},
	registerButton: {get: function(){return browser.element('input[id=submit]')}},
	wrongUserPassMessage: {get: function(){return browser.element('div.container > form > div:nth-child(3) > div')}},
	
	//category
	addCategoryLink: {get: function(){return browser.element('a#go_add_category')}},
	categoryField: {get: function(){return browser.element('input[id=name]')}},
	createCategoryButton: {get: function(){return browser.element('input[id=submit]')}},
	listCategoriesTitle: {get: function(){return browser.element('h1=List Categories')}},
	deleteCategory: {get: function(){return browser.element('href=deletecategory?id=1010')}},
	categoryRow: {get: function(){return browser.element('.table > tbody > tr:last-child > td:nth-child(1)')}},
	
	//expense page fields
	dayField: {get: function(){return browser.element('input[id=day]')}},
	monthField: {get: function(){return browser.element('input[id=month]')}},
	yearField: {get: function(){return browser.element('input[id=year]')}},
	categorySelect: {get: function(){return browser.element('select#category')}},
	amountField: {get: function(){return browser.element('input[id=amount]')}},
	reasonField: {get: function(){return browser.element('input[id=reason]')}},
	createExpenseButton: {get: function(){return browser.element('input[id=submit]')}},
	expenseDateRow: {get: function(){return browser.element('.table > tbody > tr:last-child > td:nth-child(1)')}},
	expenseCategoryRow: {get: function(){return browser.element('.table > tbody > tr:last-child > td:nth-child(2)')}},
	expenseAmountRow: {get: function(){return browser.element('.table > tbody > tr:last-child > td:nth-child(3)')}},
	expenseReasonRow: {get: function(){return browser.element('.table > tbody > tr:last-child > td:nth-child(4)')}},
	addExpenseTitle: {get: function(){return browser.element('h1=Add Expense')}},
	listExpensesTitle: {get: function(){return browser.element('h1=List Expenses:')}},

	//Statitics page
	statisticsTitle: {get: function(){return browser.element('h3=Test Statistics:')}},

	verifyListExpensesText: {
		value: function () {
			var listExpensesText= this.listTitle.getText();
			expect (listExpensesText).to.have.string('List Expenses:');

		},
	},

	verifyCategoryWithNameCreated: {
		value: function (name) {
			expect (expensePage.categoryRow.getText()).to.equal(name);
		},
	},


	verifyExpenseCreated: {
		value: function (date,category,amount,reason) {
			expect (this.expenseDateRow.getText()).to.equal(date);
			expect (this.expenseCategoryRow.getText()).to.equal(category);
			expect (this.expenseAmountRow.getText()).to.equal(amount);
			expect (this.expenseReasonRow.getText()).to.equal(reason);

		},
	},
	
	verifyAddExpenseTitleisDisplayed: {
		value: function(title) {
			expect (this.addExpenseTitle.getText()).to.equal('Add Expense');

		},
	},

	verifyListExpensesTitleisDisplayed: {
		value: function(title) {
			expect (this.listExpensesTitle.getText()).to.equal('List Expenses:');

		},
	},

	verifyCategoryTitleisDisplayed: {
		value: function(title) {
			expect (this.listCategoriesTitle.getText()).to.equal('List Categories');

		},
	},
	
	verifyStatisticsTitleisDisplayed: {
		value: function(title) {
			expect (this.statisticsTitle.getText()).to.equal('Test Statistics:');

		},
	},
	

	getUserName: {
		value: function () {
			 var user = 'test';
 			 var date = new Date().getTime();
             var userName= user +'-' + date;
             return userName;

		},
	},

});

module.exports = expensePage;