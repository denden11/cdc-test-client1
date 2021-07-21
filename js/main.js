var isLogged = false;
module.export = {
  logCheck() {
    return isLogged;
  },
  login(){
    gigya.accounts.showScreenSet({
      screenSet:'Default-RegistrationLogin',
      onAfterSubmit:getAccountInfo
    });
  },
  logout() {
    gigya.accounts.logout({callback:afterLogout});
  },
  afterLogout(response) {
    if ( response.errorCode == 0 ) {
      isLogged = false;
    }
    else {
      alert('Error :' + response.errorMessage);
    }
  },
  getAccountInfo(callbackFun){
    gigya.accounts.getAccountInfo({ callback: getAccountInfoResponse });
  },
  liteRegistration() {
    gigya.accounts.showScreenSet({
      screenSet:'Default-LiteRegistration'
    });
  }
}
