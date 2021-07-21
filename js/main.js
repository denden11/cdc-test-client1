var isLogged = false;
function logCheck() {
  return isLogged;
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
    isLogged = false;
  }
  else {
    alert('Error :' + response.errorMessage);
  }
}
function getAccountInfo(callbackFun){
  gigya.accounts.getAccountInfo({ callback: getAccountInfoResponse });
}
function liteRegistration() {
  gigya.accounts.showScreenSet({
    screenSet:'Default-LiteRegistration'
  });
}

export * from 'main.js';
