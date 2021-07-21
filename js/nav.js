import {login,liteRegistration,logout,getAccountInfo} from "./main.js";

document.getElementById("btnSubscribe").addEventListener("click", liteRegistration);
document.getElementById("btnLogin").addEventListener("click", login);
document.getElementById("btnLogout").addEventListener("click", logout(afterLogout));

getAccountInfo(getAccountInfoResponse);
// function getAccountInfoResponse(response) {
//   console.log(response);
//   if (response.errorCode == 0) {
//     document.getElementById("btnLogin").classList.add("d-none");
//     document.getElementById("dropdownUsername").classList.remove("d-none");
//     document.getElementById("dropdownUsername").innerHTML = response.profile.firstName;
//   } else {
//     document.getElementById("btnLogin").classList.remove("d-none");
//     document.getElementById("dropdownUsername").classList.add("d-none");
//   }
// }
function afterLogout(response) {
  if ( response.errorCode == 0 ) {
    document.getElementById("btnLogin").classList.remove("d-none");
    document.getElementById("dropdownUsername").classList.add("d-none");
  }
  else {
    alert('Error :' + response.errorMessage);
  }
}
