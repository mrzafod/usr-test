//------------------------------------------------------------------------------
// Publish
//------------------------------------------------------------------------------

// We are publish common users list for logged in users
// -----------------------------------------------------------------------------
Meteor.publish("userslist", function () {
	if(!this.userId) return null;

	return Meteor.users.find({});
});
