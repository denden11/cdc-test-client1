
gigya.socialize.addEventHandlers({
  onLogin:getAccountInfoResponse
});
function getAccountInfoResponse(response)
{
  console.log(response);
  if ( response.errorCode == 0 ) {
    document.getElementById("txtWelcome").innerHTML = "Welcome " + response.profile.firstName;
  }
  else{
    document.getElementById("txtWelcome").innerHTML = "Welcome";
  }
}
    
