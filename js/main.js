
isLogged;
document.getElementById("btnLogin").addEventListener("click", Login);

function isLogged(){
  gigya.socialize.addEventHandlers({
    onLogin:Login
  });
}
function Login(eventObj){
  console.log(eventObj);
  // gigya.accounts.showScreenSet({
  //   screenSet:'Default-RegistrationLogin',
  //   onAfterSubmit:getAccountInfo
  // });
}
function getAccountInfo(){
  gigya.accounts.getAccountInfo({ callback: getAccountInfoResponse });
}
function getAccountInfoResponse(response)
{
    if ( response.errorCode == 0 ) {
        document.getElementById("txtWelcome").innerHTML = "Welcome " + response.profile.firstName;
        document.getElementById("btnLogin").innerHTML = "Logout";
        console.log(response);
    }
    else {
        console.log('Error :' + response.errorMessage);
    }
}
 
