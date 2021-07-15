
afterSubmit;
document.getElementById("btnLogin").addEventListener("click", Login);

function Login(){
  var isLoggedin = false;
  gigya.accounts.showScreenSet({
    screenSet:'Default-RegistrationLogin',
    onAfterSubmit:afterSubmit
  });

}
function afterSubmit(){
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
 
