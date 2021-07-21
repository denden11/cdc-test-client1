window.addEventListener("load", function(){
  var noErrorCode = 0;

  gigya.socialize.addEventHandlers({
    onLogin:onLoginResponse,
    onLogout:onLogoutResponse,
    onError:onErrorResponse
  });
  function onLoginResponse(response){
    document.getElementById("txtWelcome").innerHTML = "Welcome " + response.user.firstName;
  }
  function onLogoutResponse() {
    document.getElementById("txtWelcome").innerHTML = "Welcome";
  }
  function onErrorResponse(response) {
    console.log(response);
  }
  gigya.accounts.getAccountInfo({ callback: displayName });
  function displayName(response) {
    if (response.errorCode == noErrorCode) {
      document.getElementById("txtWelcome").innerHTML = "Welcome " + response.user.firstName;
    } else {
      document.getElementById("txtWelcome").innerHTML = "Welcome";
    }
  }
});