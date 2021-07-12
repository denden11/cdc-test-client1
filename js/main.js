function GigyaLoadFunctions() {gigya.accounts.getAccountInfo({"callback":function(res) {
    if (res.errorCode === 0) {
        window.userGigyaData = res;
        }
    }   
});
}
var onGigyaServiceReady = function() {
    GigyaLoadFunctions();
}