import {login,liteRegistration,logout,logCheck} from './main.js';

document.getElementById("btnSubscribe").addEventListener("click", liteRegistration);
document.getElementById("btnLogin").addEventListener("click", login);
document.getElementById("btnLogout").addEventListener("click", logout);

if (logCheck) {
  document.getElementById("btnLogin").classList.add("d-none");
  document.getElementById("dropdownUsername").classList.remove("d-none");
  document.getElementById("dropdownUsername").innerHTML = response.profile.firstName;
} else {
  document.getElementById("btnLogin").classList.remove("d-none");
  document.getElementById("dropdownUsername").classList.add("d-none");
}

