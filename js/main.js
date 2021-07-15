gigya.accounts.getAccountInfo({ callback: getAccountInfoResponse });
document.getElementById("btnLogin").addEventListener("click", Login);
function Login(){
  gigya.accounts.showScreenSet({
    screenSet:'Default-RegistrationLogin',
    onAfterSubmit:afterLogin
  });

}
function afterLogin(response){
  gigya.accounts.getAccountInfo({ callback: getAccountInfoResponse });
}

function getAccountInfoResponse(response)
{
    if ( response.errorCode == 0 ) {
        document.getElementById("txtWelcome").innerHTML = "Welcome" + response.profile.firstName;
        document.getElementById("btnLogin").innerHTML = response.profile.firstName;
        console.log(response);
    }
    else {
        console.log('Error :' + response.errorMessage);
    }   
}
 
