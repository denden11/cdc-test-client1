// DISPLAY PROFILE INFO
gigya.socialize.addEventHandlers({
  onLogout:onLogoutResponse
});
gigya.accounts.getAccountInfo({ callback: displayProfile });
function displayProfile(res) {
  console.log(res);
  document.getElementById("profilePicture").src = res.profile.photoURL;
}
function onLogoutResponse(response) {
  console.log(response);
}