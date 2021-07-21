
gigya.socialize.addEventHandlers({
  onLogin:onLoginResponse,
  onLogout:onLogoutResponse
});
function onLoginResponse(response){
  document.getElementById("txtWelcome").innerHTML = "Welcome " + response.profile.firstName;
}
function onLogoutResponse(response) {
  document.getElementById("txtWelcome").innerHTML = "Welcome";
}
    
