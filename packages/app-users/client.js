//------------------------------------------------------------------------------
// Subscribe
//------------------------------------------------------------------------------

// We are trigger a subscription depends on logged or not
// -----------------------------------------------------------------------------

Deps.autorun(function () {
	var _usr = Meteor.user();
	
	Meteor.subscribe("userslist");
});



//------------------------------------------------------------------------------
// Init
//------------------------------------------------------------------------------

// Config an AccountsUI
// -----------------------------------------------------------------------------

Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
});