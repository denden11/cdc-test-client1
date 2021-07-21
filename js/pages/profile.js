window.addEventListener("load", function(){
  // DISPLAY PROFILE INFO
  var homepageURL = "https://denden11.github.io/cdc-test-client1/";
  var noErrorCode = 0;

  gigya.socialize.addEventHandlers({
    onLogout:onLogoutResponse
  });
  gigya.accounts.getAccountInfo({ callback: displayProfile });
  document.getElementById("btnRegisterTFA").addEventListener("click", registerTFA);

  function displayProfile(response) {
    if (response.errorCode == noErrorCode) {
      document.getElementById("profilePicture").src = response.profile.photoURL;
      document.getElementById("fullName").innerHTML = response.profile.firstName +" "+response.profile.lastName;
    } else {
      window.location.href = homepageURL;
    }
  }
  function onLogoutResponse() {
    window.location.href = homepageURL;
  }
  function registerTFA(){
    gigya.accounts.showScreenSet({
      screenSet:'Default-RegistrationLogin',
      startScreen:'gigya-tfa-registration-screen'
    });
  }
 
});
