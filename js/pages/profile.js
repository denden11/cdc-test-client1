window.addEventListener("load", function(){
  // DISPLAY PROFILE INFO
  var homepageURL = "https://denden11.github.io/cdc-test-client1/";
  var noErrorCode = 0;

  gigya.socialize.addEventHandlers({
    onLogout:onLogoutResponse
  });
  getProfileData();

  document.getElementById("btnEditProfile").addEventListener("click",showEditProfile);
  document.getElementById("btnDeactivateAccount").addEventListener("click",getAccountToDeactivate);
  
  function getProfileData() {
    gigya.accounts.getAccountInfo({ callback: displayProfile });
  }
  function displayProfile(response) {
    if (response.errorCode == noErrorCode) {
      document.getElementById("profilePicture").src = response.profile.photoURL;
      document.getElementById("fullName").innerHTML = response.profile.firstName +" "+response.profile.lastName;
      document.getElementById("email").innerHTML = response.profile.email;
      document.getElementById("phoneNumber").innerHTML = response.phoneNumber;
      document.getElementById("yearofBirth").innerHTML = response.profile.birthYear;
      document.getElementById("zipcode").innerHTML = response.profile.zip;
      document.getElementById("country").innerHTML = response.profile.country;
    } else {
      window.location.href = homepageURL;
    }
  }
  function onLogoutResponse() {
    window.location.href = homepageURL;
  }
  function showEditProfile() {
    gigya.accounts.showScreenSet({
      screenSet:'Default-ProfileUpdate',
      onAfterSubmit:getProfileData
    });
  }
  function getAccountToDisable() {
    gigya.accounts.getAccountInfo({ callback: disableLogin });
  }
  async function disableLogin(res) {
    const response = await fetch('https://accounts.us1.gigya.com/accounts.setAccountInfo?isActive:false,UID:e8e80239079e4a64a5bfdb480407e7f8,format:json,apiKey:3_ojnmzVXjaGTCcK4MHoSjrWzeXQPFfYHRW9XvKMPEf4PzI6kliiUrY924BBtaZuBQ', {
      method: 'POST'
    });
    const myJson = await response.json();
    console.log(myJson)
  }
  function getAccountToDeactivate() {
    var result = confirm("Are you sure you wan't to deactivate your account?");
    if (result) {
      var params = {
        data: {deleteUser: true}
      }
      gigya.accounts.setAccountInfo(params);
      getAccountToDisable();
    }
  }  
  function afterDeactivate(response) {
    console.log(response);
  }

});
