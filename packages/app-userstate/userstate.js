function updateOnlineStatus(id, online, timeStamp) {
  Meteor.users.update({_id: id }, {
    $set: {
      profile: {
        online: online,
        lastOnline: timeStamp
      }
    }
  }, function(error) {
    if (error) console.log(error);
  });
};

function printDate(date) {
  check(date, Date);
  return date.getFullYear() + " " + date.getHours() + " " + date.getMinutes() + " " + date.getSeconds();
};

var handleOnlineStatus = function (user) { 
  var userID = user.userId,
      session = user._session;
  session.socket.on("close", Meteor.bindEnvironment( function () {
    updateOnlineStatus(userID, false, printDate(new Date()));
  }, function (e) {
    console.log(e)
  }));

  updateOnlineStatus(userID, true, 'Right now');
};

Meteor.methods({
  handleOnlineStatus: handleOnlineStatus
});
