
Template.usersList.helpers({
	list: function () {
		return Meteor.users.find({})
	}
})