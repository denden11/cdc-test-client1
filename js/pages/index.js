
gigya.socialize.addEventHandlers({
  onLogin:onLoginResponse,
  onLogout:onLogoutResponse
});
function onLoginResponse(response){
  console.log(response);
  document.getElementById("txtWelcome").innerHTML = "Welcome " + response.profile.firstName;
}
function onLogoutResponse() {
  document.getElementById("txtWelcome").innerHTML = "Welcome";
}
    
