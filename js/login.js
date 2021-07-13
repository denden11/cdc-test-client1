// import {liteRegStart} from "js/lite-registration.js";
// {
//   enabledProviders: "google"
// }
console.log("hey");
document.getElementById("btnConnect").addEventListener("click", Login);
function Login() {
  var params = {
    "callback": onLogin,
    "provider": "google",
    context: 'testLogin'
  };
  gigya.socialize.login(params);
  console.log("hey2");
}
//declare the callback function in your code
function onLogin(response) {
  if (response.errorCode == 0) {
    // this will inject the user name and nickname
    document.getElementById('divUserName').innerHTML = response.user.nickname;
    ///set the photo to image src attribute.
    document.getElementById('imgUserPhoto').src = response.user.photoURL;
    console.log(response);
  }
  else {
    //handle errors
    alert("An error has occured!" + '\n' +
      "Error details: " + response.errorMessage + '\n' +
      "In method: " + response.operation);
  }
}
