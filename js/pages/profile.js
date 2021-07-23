window.addEventListener("load", function(){
  // DISPLAY PROFILE INFO
  var homepageURL = "https://denden11.github.io/cdc-test-client1/";
  var noErrorCode = 0;

  gigya.socialize.addEventHandlers({
    onLogout:onLogoutResponse
  });
  gigya.accounts.getAccountInfo({ callback: displayProfile });

  document.getElementById("btnEditProfile").addEventListener("click",showEditProfile);

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
      screenSet:'Default-ProfileUpdate'
    });
  }
});
