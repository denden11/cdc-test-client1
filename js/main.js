
getAccountInfo();
document.getElementById("btnLoginLogout").addEventListener("click", LoginLogout);
var isLogged = false;

function LoginLogout(){
  if (isLogged) {
    gigya.accounts.logout({callback:afterLogout});
  }else {
    gigya.accounts.showScreenSet({
      screenSet:'Default-RegistrationLogin',
      onAfterSubmit:getAccountInfo
    });
  }
}
function afterLogout(response) {
  if ( response.errorCode == 0 ) {
    alert('User has logged out');
  }
  else {
    alert('Error :' + response.errorMessage);
  }
}
function getAccountInfo(){
  gigya.accounts.getAccountInfo({ callback: getAccountInfoResponse });
}
function getAccountInfoResponse(response)
{
  if ( response.errorCode == 0 ) {
      document.getElementById("txtWelcome").innerHTML = "Welcome " + response.profile.firstName;
      document.getElementById("btnLogin").innerHTML = "Logout";
      isLogged = true;
  }
  else {
      console.log('Error :' + response.errorMessage);
  }
}
 
