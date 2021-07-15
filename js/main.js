
document.getElementById("btnLogin").addEventListener("click", Login);


function Login(){
  gigya.accounts.showScreenSet({screenSet:'Default-RegistrationLogin'});
}