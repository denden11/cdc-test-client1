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
        console.log(response);
    }
    else {
        alert('Error :' + response.errorMessage);
    }   
}
 
