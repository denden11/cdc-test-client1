import {getAccountInfo} from 'main.js';

getAccountInfo(getAccountInfoResponse);
function getAccountInfoResponse(response)
{
  if ( response.errorCode == 0 ) {
    document.getElementById("txtWelcome").innerHTML = "Welcome " + response.profile.firstName;
  }
  else{
    document.getElementById("txtWelcome").innerHTML = "Welcome";
  }
}
    
