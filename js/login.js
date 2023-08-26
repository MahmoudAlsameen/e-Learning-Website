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



function loginn() {
  if (
    logemail.value === localStorage.getItem("email") &&
    logpass.value === localStorage.getItem("pw")
  ) {
    alert("true");
    localStorage.setItem("loggedin",true)
    window.open("home.html")
 
  } else {
    alert("false");
    logsubmit.onsubmit = function (event) {
      event.preventDefault();
    };
  }
}


function check() {
  let storedName = localStorage.getItem("fName");
  let storedPw = localStorage.getItem("password");

  let userName = document.getElementById("email");
  let userPw = document.getElementById("password");

  if (userName.value == storedName && userPw.value == storedPw && localStorage.getItem("loggedin")!="false") {
    alert("You are logged in.");
  } else {
    alert("enter invalid email and password ");
  }
}
