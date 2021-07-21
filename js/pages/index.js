window.addEventListener("load", function(){
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
});