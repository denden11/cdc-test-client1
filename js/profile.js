
getAccountInfo();
logCheck();
document.getElementById("btnSubscribe").addEventListener("click", liteRegistration);
document.getElementById("btnLogin").addEventListener("click", login);
document.getElementById("btnLogout").addEventListener("click", logout);
var isLogged = false;

function logCheck() {
  if (isLogged) {
    document.getElementById("btnLogin").classList.add("d-none");
    document.getElementById("dropdownUsername").classList.remove("d-none");
  } else {
    document.getElementById("btnLogin").classList.remove("d-none");
    document.getElementById("dropdownUsername").classList.add("d-none");
  }
}
function login(){
  gigya.accounts.showScreenSet({
    screenSet:'Default-RegistrationLogin',
    onAfterSubmit:getAccountInfo
  });
}
function logout() {
  gigya.accounts.logout({callback:afterLogout});
}

function afterLogout(response) {
  if ( response.errorCode == 0 ) {
    alert('User has logged out');
    // document.getElementById("txtWelcome").innerHTML = "Welcome";
    isLogged = false;
    logCheck();
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
      // document.getElementById("txtWelcome").innerHTML = "Welcome " + response.profile.firstName;
      document.getElementById("dropdownUsername").innerHTML = response.profile.firstName;
      isLogged = true;
      logCheck();
  }
}
function liteRegistration() {
  gigya.accounts.showScreenSet({
    screenSet:'Default-LiteRegistration'
    // onAfterSubmit:getAccountInfo
  });
}

// DISPLAY PROFILE INFO
gigya.accounts.getAccountInfo({ callback: displayProfile });
function displayProfile(res) {
  console.log(res);
  document.getElementById("profilePicture").src = res.profile.photoURL;
}