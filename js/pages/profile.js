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
  async function disableLogin(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data)
    });
    return response.json(); 
  }
  function getAccountToDeactivate() {
    var result = confirm("Are you sure you wan't to deactivate your account?");
    if (result) {
      var params = {
        data: {deleteUser: true}
      }
      gigya.accounts.setAccountInfo(params);
      disableLogin('https://accounts.us1.gigya.com/accounts.setAccountInfo', 
               {"isActive":false,"UID":"e71c64e13e0a4880a1c4d85d7bfcaf2d","format":"json","apiKey":"3_ojnmzVXjaGTCcK4MHoSjrWzeXQPFfYHRW9XvKMPEf4PzI6kliiUrY924BBtaZuBQ"})
      .then(data => {
          console.log(data); 
      });
    }
  }  
  function afterDeactivate(response) {
    console.log(response);
  }

});
