## app-userstate
app-userstate exports object UserState

Now you can set user status, passig this user to method

``` UserState.updateOnlineStatus(userID, status); ```

Also package provide UI template userState what showing online status and last online date. Simply include it to your existing template by ```{{>userState}}``` expression.