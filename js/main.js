

document.getElementById("btnLogin").addEventListener("click", Login);
function Login(){
  var sample = gigya.accounts.showScreenSet({screenSet:'Default-RegistrationLogin'});
  console.log(sample);
}

function getAccountInfoResponse(response)
{
    if ( response.errorCode == 0 ) {           
        var profile = response['profile'];
        var msg = profile['firstName'] + ' is ' + profile['age'] + ' years old';
        alert(msg);
    }
    else {
        alert('Error :' + response.errorMessage);
    }   
}
 
gigya.accounts.getAccountInfo({ callback: getAccountInfoResponse });