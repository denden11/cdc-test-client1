

document.getElementById("btnLogin").addEventListener("click", Login);
function Login(){
  gigya.accounts.showScreenSet({
    screenSet:'Default-RegistrationLogin',
    onAfterSubmit:afterLogin
  });

}
function afterLogin(response){
  console.log("hey");
  if ( response.errorCode == 0 ) {           
    console.log(response);
  }
  else {
      alert('Error :' + response.errorMessage);
  }   
}

function getAccountInfoResponse(response)
{
    if ( response.errorCode == 0 ) {           
        // var profile = response['profile'];
        // var msg = profile['firstName'] + ' is ' + profile['age'] + ' years old';
        // alert(msg);
        console.log(response);
    }
    else {
        alert('Error :' + response.errorMessage);
    }   
}
 
gigya.accounts.getAccountInfo({ callback: getAccountInfoResponse });