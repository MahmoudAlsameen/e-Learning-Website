let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
  toggleBtn.classList.replace('fa-sun', 'fa-moon');
  body.classList.add('dark');
  localStorage.setItem('dark-mode', 'enabled');
};

const disableDarkMode = () => {
  toggleBtn.classList.replace('fa-moon', 'fa-sun');
  body.classList.remove('dark');
  localStorage.setItem('dark-mode', 'disabled');
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

toggleBtn.onclick = (e) => {
  darkMode = localStorage.getItem('dark-mode');
  if (darkMode === 'disabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
  profile.classList.toggle('active');
};

window.onscroll = () => {
  profile.classList.remove('active');

  if (window.innerWidth < 1200) {
    sideBar.classList.remove('active');
    body.classList.remove('active');
  }
};

/* 
Add regestration info to local storage and json file if possible
*/



// document.getElementById('storeBtn').onclick=store()

function store() {
  if (
    fName.value.length == 0 ||
    password.value.length == 0 ||
    validate() == false ||
    password.value != rPassword.value
  ) {
    alert('Please fill in email and password');
    regsbmit.onsubmit = function (event) {
      event.preventDefault();
    };
  } else {
    localStorage.setItem('email', email.value);
    localStorage.setItem('pw', password.value);
    localStorage.setItem("fName",fName.value)
    
    localStorage.setItem("profilePic",profilePic.value)
    localStorage.setItem("loggedin",false)
    regsbmit.onsubmit = function (event) {
      return true;
    };
  }
}

function validate() {
  // var user = fName.value;
  // var user2 = document.getElementById("name");
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email.value);
}
