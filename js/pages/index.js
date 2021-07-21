window.addEventListener("load", function(){
  var noErrorCode = 0;

  gigya.socialize.addEventHandlers({
    onLogin:onLoginResponse,
    onLogout:onLogoutResponse,
    onError:onErrorResponse
  });
  gigya.accounts.getAccountInfo({ callback: displayName });

  function onLoginResponse(response){
    document.getElementById("txtWelcome").innerHTML = "Welcome " + response.user.firstName;
  }
  function onLogoutResponse() {
    document.getElementById("txtWelcome").innerHTML = "Welcome";
  }
  function onErrorResponse(response) {
    console.log(response);
  }
  function displayName(response) {
    if (response.errorCode == noErrorCode) {
      document.getElementById("txtWelcome").innerHTML = "Welcome " + response.profile.firstName;
    } else {
      document.getElementById("txtWelcome").innerHTML = "Welcome";
    }
  }
});