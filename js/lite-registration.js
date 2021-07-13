function liteRegistrationCallback(res) {
  console.log(res);
  var myToken, myEmail, myProfile, callParams;
  myToken = res.regToken;
  myEmail = "The user's email address";
  myProfile = {
    "email": myEmail
    //, any additional profile data collected, i.e., firstName
  }
  callParams = {
    "regToken": myToken,
    "profile": myProfile,
    "subscriptions": {
      "jun4th": { // This MUST be active and predefined in your site's schema or setAccountInfo will fail!
        "email": {
          "isSubscribed": true, // This tells whether the user is actually subscribed to the subscription, this can be false if the user registers but does not want to receive the newsletter.
          "tags": [
            // Any tags you want to associate with this user.
            // The tags property should be removed if you are not setting tags or any existing data will be deleted.
          ]
        }
      }
    }
  };
  gigya.accounts.setAccountInfo(callParams);
}

function liteRegStart() {
  gigya.accounts.initRegistration({
    isLite: true,
    callback: function (res) {
      liteRegistrationCallback(res);
    }
  });
}

export {liteRegStart};