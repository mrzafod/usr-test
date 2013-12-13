
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

function formatDate(date) {
  check(date, Date);
  return date.toISOString();
};

var handleOnlineStatus = function (user) { 
  var userID = user.userId,
      session = user._session;

  session.socket.on("close", Meteor.bindEnvironment( function () {
    updateOnlineStatus(userID, false, formatDate(new Date()));
  }, function (e) {
    console.log(e)
  }));

  updateOnlineStatus(userID, true);
};


//Module exports
UserState = {
  handleOnlineStatus: handleOnlineStatus
};
