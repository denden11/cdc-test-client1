// DISPLAY PROFILE INFO
var homepageURL = "https://denden11.github.io/cdc-test-client1/";
var noErrorCode = 0;
var profilePictureID = "profilePicture";

gigya.socialize.addEventHandlers({
  onLogout:onLogoutResponse
});
gigya.accounts.getAccountInfo({ callback: displayProfile });
function displayProfile(response) {
  console.log(response);
  if (response.errorCode == noErrorCode) {
    document.getElementById(profilePictureID).src = response.profile.photoURL;
  } else {
    window.location.href = homepageURL;
  }
}
function onLogoutResponse(response) {
  window.location.href = homepageURL;
}