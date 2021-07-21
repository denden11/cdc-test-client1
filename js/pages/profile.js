// DISPLAY PROFILE INFO
gigya.accounts.getAccountInfo({ callback: displayProfile });
function displayProfile(res) {
  console.log(res);
  document.getElementById("profilePicture").src = res.profile.photoURL;
}