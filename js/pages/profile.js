// DISPLAY PROFILE INFO
gigya.socialize.addEventHandlers({
  onLogout:onLogoutResponse
});
gigya.accounts.getAccountInfo({ callback: displayProfile });
function displayProfile(response) {
  console.log(response);
  if (response.errorCode == 0) {
    document.getElementById("profilePicture").src = response.profile.photoURL;
  } else {
    window.location.href = "/";
  }
}
function onLogoutResponse(response) {
  console.log(response);
}